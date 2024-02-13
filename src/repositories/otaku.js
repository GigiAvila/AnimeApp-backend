const seed = require('../seedData')
const bcrypt = require('bcrypt')
const {
  generateSign,
  generateEmailConfirmationToken,
  verifyJwt
} = require('../config/jwt')
const { deleteFile } = require('../middleware/deleteFile')
const Otaku = require('../model/otaku')

const cleanOtakuCollections = async () => {
  await Otaku.collection.drop()
  console.log('>>> Colección Otaku limpia!')
}

const saveOtakusDocuments = async () => {
  const otakusWithHashedPass = seed.otakus.map((otaku) => {
    return {
      ...otaku,
      password: bcrypt.hashSync(otaku.password, 10)
    }
  })

  const otakus = await Otaku.insertMany(otakusWithHashedPass)

  console.log('>>>> Documentos Otakus  guardados con éxito')

  return {
    otakus
  }
}

const updateOtakusFavoriteMangaInDB = async (mangas, otakus) => {
  await Promise.all(
    otakus.map(async (otaku) => {
      const manga = mangas.find(
        (manga) => manga._mangaId === otaku._favoriteManga
      )
      await otaku.updateOne({ _favoriteManga: manga._id })
    })
  )

  console.log(`>>>> Otakus' favoriteManga actualizados`)
}

const cleanOtakuPrivateFields = async () => {
  await Otaku.updateMany(
    {},
    {
      $unset: {
        _userId: 1,
        _favoriteOtaku: 1
      }
    }
  )

  console.log('>>>>Campos utilitarios de Otaku eliminados')
}

const getAllOtakusFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') }
  }
  const otakus = await Otaku.find(filter ? nameFilterOptions : {}).populate({
    path: '_favoriteManga',
    model: 'Manga',
    select: {
      _id: true,
      name: true
    }
  })
  return otakus
}

const getOtakuByIdFromDB = async (id) => {
  const otaku = await Otaku.findById(id).populate({
    path: '_favoriteManga',
    model: 'Manga',
    select: {
      _id: true,
      name: true
    }
  })
  return otaku
}

const registerOtakuInDB = async (payload) => {
  try {
    const otakuDuplicate = await Otaku.findOne({ email: payload.email })

    if (!otakuDuplicate) {
      payload.emailConfirmationToken = generateEmailConfirmationToken(
        payload.email
      )

      const newOtaku = new Otaku(payload)
      await newOtaku.save()
      console.log('emailToken', newOtaku.emailConfirmationToken)

      return { success: true, message: 'New Otaku is created', otaku: newOtaku }
    } else {
      console.log('>>>>> ⛑️This otaku already exists in DB')
      return { success: false, message: 'This otaku already exists in DB' }
    }
  } catch (error) {
    console.error('Error during otaku registration:', error)
    return {
      success: false,
      message: 'An error occurred during otaku registration'
    }
  }
}

const deleteOtakuFromDB = async (id) => {
  await Otaku.deleteOne({ _id: id })
}

const updateOtakuByEmailInDB = async (email, payload) => {
  try {
    console.log('email', email)
    console.log('payload', payload)
    const oldOtaku = await Otaku.findOne({ email: email })

    if (!oldOtaku) {
      return { success: false, message: 'Otaku not found' }
    }

    const newOtaku = new Otaku(payload)
    newOtaku._id = oldOtaku._id

    if (newOtaku.avatar && oldOtaku.avatar) {
      deleteFile(oldOtaku.avatar)
    }
    const updatedOtaku = await Otaku.updateOne(
      { email: email },
      { $set: newOtaku }
    ).populate({
      path: '_favoriteManga',
      model: 'Manga',
      select: {
        _id: true,
        name: true
      }
    })

    return { success: true, message: 'Otaku is updated...', updatedOtaku }
  } catch (error) {
    console.error('Error during updating otaku... ', error)
    return {
      success: false,
      message: 'An error occurred during updating otaku'
    }
  }
}

const loginOtakuInDB = async (payload) => {
  try {
    const user = await Otaku.findOne({ email: payload.email })

    if (!user) {
      console.log(`>>>>> the otaku ${user} does not exist in DB`)
      return { success: false, message: 'Otaku does not exist' }
    }

    if (bcrypt.compareSync(payload.password, user.password)) {
      const token = generateSign(user._id)
      console.log('>>>> otaku is now log in')
      return { success: true, message: ' otaku is now logged in', token }
    } else {
      console.log('>>>> Passwords do not match')
      return { success: false, message: 'Passwords do not match' }
    }
  } catch (error) {
    console.error('Error in loginOtakuInDB:', error)
    return {
      success: false,
      message: 'An error occurred during authentication'
    }
  }
}

const changeEmailInDB = async (emailConfirmationToken, newEmail) => {
  console.log(emailConfirmationToken)
  console.log(newEmail)
  try {
    const decodedToken = verifyJwt(emailConfirmationToken)

    if (!decodedToken) {
      return { success: false, message: 'Invalid token' }
    }

    const { email: oldEmail } = decodedToken

    const oldUser = await Otaku.findOne({ email: oldEmail })

    if (!oldUser) {
      return { success: false, message: 'User not found' }
    }

    oldUser.email = newEmail
    await oldUser.save()

    return { success: true, message: 'Email changed successfully' }
  } catch (error) {
    console.error('Error during changing email... ', error)
    return {
      success: false,
      message: 'An error occurred during changing email'
    }
  }
}

const changePasswordInDB = async (
  email,
  currentPassword,
  newPassword,
  confirmPassword
) => {
  try {
    currentPassword = String(currentPassword)
    newPassword = String(newPassword)
    confirmPassword = String(confirmPassword)

    if (currentPassword === newPassword) {
      return {
        success: false,
        message: 'Sorry, the new password has to be different from before'
      }
    }

    if (newPassword !== confirmPassword) {
      return {
        success: false,
        message: 'New password does not match'
      }
    }

    const otaku = await Otaku.findOne({ email })
    console.log(otaku)

    if (!otaku) {
      return { success: false, message: 'Otaku not found' }
    }

    if (!bcrypt.compareSync(currentPassword, otaku.password)) {
      return { success: false, message: 'Current password is incorrect' }
    }

    const hashedNewPassword = bcrypt.hashSync(newPassword, 10)

    const updateRes = await updateOtakuByEmailInDB(email, {
      password: hashedNewPassword
    })

    if (updateRes.success) {
      return { success: true, message: 'Password updated successfully' }
    } else {
      return { success: false, message: 'Failed to update password' }
    }
  } catch (error) {
    console.error('Error during password change: ', error)
    return {
      success: false,
      message: 'An error occurred during password change'
    }
  }
}

const updatePreviousReadingsInDB = async (email, payload) => {
  try {
    let otaku = await Otaku.findOne({ email: email })
    console.log(payload)

    if (!otaku) {
      return { success: false, message: 'Otaku not found' }
    }

    const prevReadings = otaku.previousReadings.map((reading) =>
      reading.toString()
    )

    const newReadings = payload
      .map((reading) => reading.toString())
      .filter((reading) => !prevReadings.includes(reading))

    if (newReadings.length > 0) {
      otaku.previousReadings = [...prevReadings, ...newReadings]
      otaku.previousReadings = [...new Set(otaku.previousReadings)]

      await otaku.save()
    }

    otaku = await Otaku.findById(otaku._id).populate({
      path: 'previousReadings',
      model: 'Manga',
      select: {
        _id: true,
        name: true
      }
    })

    return { success: true, message: 'History updated...', otaku }
  } catch (error) {
    console.error('Error updating history... ', error)
    return {
      success: false,
      message: 'An error occurred during updating history'
    }
  }
}

const removePreviousReadingsInDB = async (email, readingIds) => {
  try {
    let otaku = await Otaku.findOne({ email })

    if (!otaku) {
      return { success: false, message: 'Otaku not found' }
    }

    readingIds.forEach((readingId) => {
      otaku.previousReadings = otaku.previousReadings.filter(
        (reading) =>
          reading &&
          reading._id &&
          reading._id.toString() !== readingId.toString()
      )
    })

    await otaku.save()

    otaku = await Otaku.findById(otaku._id).populate({
      path: 'previousReadings',
      model: 'Manga',
      select: {
        _id: true,
        name: true
      }
    })

    return { success: true, message: 'Reading removed...', otaku }
  } catch (error) {
    console.error('Error removing previous reading... ', error)
    return {
      success: false,
      message: 'An error occurred during removing reading'
    }
  }
}

const updateOtakusLikesInDB = async (email, payload) => {
  try {
    let otaku = await Otaku.findOne({ email: email })

    if (!otaku) {
      return { success: false, message: 'Otaku not found' }
    }

    const prevLikes = otaku.likes.map((like) => like.toString())

    const newLikes = payload
      .map((like) => like.toString())
      .filter((like) => !prevLikes.includes(like))

    if (newLikes.length > 0) {
      otaku.likes = [...prevLikes, ...newLikes]
      otaku.likes = [...new Set(otaku.likes)]

      await otaku.save()
    }

    otaku = await Otaku.findById(otaku._id).populate({
      path: 'likes',
      model: 'Manga',
      select: {
        _id: true,
        name: true
      }
    })

    return { success: true, message: 'Likes updated...', otaku }
  } catch (error) {
    console.error('Error updating likes... ', error)
    return {
      success: false,
      message: 'An error occurred during updating likes'
    }
  }
}

module.exports = {
  cleanOtakuCollections,
  saveOtakusDocuments,
  updateOtakusFavoriteMangaInDB,
  cleanOtakuPrivateFields,
  getAllOtakusFromDB,
  getOtakuByIdFromDB,
  deleteOtakuFromDB,
  updateOtakuByEmailInDB,
  loginOtakuInDB,
  registerOtakuInDB,
  changeEmailInDB,
  changePasswordInDB,
  updatePreviousReadingsInDB,
  removePreviousReadingsInDB,
  updateOtakusLikesInDB
}
