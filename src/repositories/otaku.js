const seed = require('../seedData')
const bcrypt = require('bcrypt')
const { generateSign } = require('../config/jwt')
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

const updateOtakusFavoriteMangaInDB = async (animes, otakus) => {
  await Promise.all(
    otakus.map(async (otaku) => {
      const manga = animes.find(
        (manga) => manga._mangaId === otaku._favoriteManga
      )
      await otaku.updateOne({ _favoriteManga: manga._id })
    })
  )

  console.log(`>>>> Otakus' favoriteAnime actualizados`)
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
      payload.verifyEmail = true

      const newOtaku = new Otaku(payload)
      await newOtaku.save()

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

const updateOtakuByIdInDB = async (id, payload) => {
  try {
    console.log(id)
    console.log(payload)
    const oldOtaku = await Otaku.findById({ _id: id })

    if (!oldOtaku) {
      return { success: false, message: 'Otaku not found' }
    }

    const newOtaku = new Otaku(payload)
    newOtaku._id = id

    if (newOtaku.avatar && oldOtaku.avatar) {
      deleteFile(oldOtaku.avatar)
    }
    const updatedOtaku = await Otaku.findByIdAndUpdate(id, newOtaku, {
      new: true
    }).populate({
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

module.exports = {
  cleanOtakuCollections,
  saveOtakusDocuments,
  updateOtakusFavoriteMangaInDB,
  cleanOtakuPrivateFields,
  getAllOtakusFromDB,
  getOtakuByIdFromDB,
  deleteOtakuFromDB,
  updateOtakuByIdInDB,
  loginOtakuInDB,
  registerOtakuInDB
}
