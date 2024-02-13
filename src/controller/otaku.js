const {
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
} = require('../repositories/otaku.js')
const { setError } = require('../config/error.js')
const bcrypt = require('bcrypt')

const getAllOtakus = async (req, res, next) => {
  try {
    const { filter } = req.query
    const otakus = await getAllOtakusFromDB(filter)
    res.status(200).json({ data: otakus })
  } catch (error) {
    return next(setError(400, "Can't find otakus"))
  }
}

const getOtakuById = async (req, res, next) => {
  try {
    const { id } = req.params
    const otakus = await getOtakuByIdFromDB(id)
    res.status(200).json({ data: otakus })
  } catch (error) {
    return next(setError(400, "Can't find otaku"))
  }
}

const registerOtaku = async (req, res, next) => {
  try {
    const { name, surname, country, email, language, password, premium } =
      req.body

    if (!password) {
      return next(setError(400, 'Password is required'))
    }

    const hashedPassword = bcrypt.hashSync(password, 10)

    const avatar = req.file ? req.file.path : undefined

    const registerData = {
      name,
      surname,
      country,
      email,
      language,
      password: hashedPassword,
      avatar,
      premium
    }

    const registerRes = await registerOtakuInDB(registerData)

    if (registerRes.success) {
      res.status(201).json({ data: registerRes })
    } else {
      res.status(401).json(registerRes)
    }
  } catch (error) {
    console.log(error)
    return next(setError(400, "Can't create otaku"))
  }
}

const deleteOtaku = async (req, res, next) => {
  try {
    const { id } = req.params
    await deleteOtakuFromDB(id)

    res.status(200).json({
      data: `Ok, The otaku with de id ${id} has been deleted from data base`
    })
  } catch (error) {
    return next(setError(201, "Can't delete otaku"))
  }
}

const updateOtaku = async (req, res, next) => {
  try {
    const { email } = req.params
    const { name, surname, country, language } = req.body
    const avatar = req.file ? req.file.path : undefined

    const updatedData = {
      name,
      surname,
      country,
      language,
      email,
      avatar
    }

    const updateRes = await updateOtakuByEmailInDB(email, updatedData)
    if (updateRes.success) {
      res.status(200).json({ data: updatedData })
    } else {
      res.status(400).json(updateRes)
    }
  } catch (error) {
    console.log(error)
    next(setError(400, "Can't update otaku"))
  }
}

const loginOtaku = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const loginData = {
      email,
      password
    }

    const loginRes = await loginOtakuInDB(loginData)

    if (loginRes.success) {
      res.status(200).json(loginRes)
    } else {
      res.status(401).json(loginRes)
    }
  } catch (error) {
    console.error(error)
    return next(setError(400, "Can't login"))
  }
}

const changeEmail = async (req, res, next) => {
  try {
    const { emailConfirmationToken } = req.params
    const { newEmail } = req.body
    console.log('Datos del formulario:', { emailConfirmationToken, newEmail })

    const changeEmailRes = await changeEmailInDB(
      emailConfirmationToken,
      newEmail
    )

    if (changeEmailRes.success) {
      res.status(200).json(changeEmailRes)
    } else {
      res.status(400).json(changeEmailRes)
    }
  } catch (error) {
    console.error(error)
    next(setError(400, "Can't change email"))
  }
}

const changePassword = async (req, res, next) => {
  try {
    const { email } = req.params
    const { currentPassword, newPassword, confirmPassword } = req.body

    const changePasswordRes = await changePasswordInDB(
      email,
      currentPassword,
      newPassword,
      confirmPassword
    )

    if (changePasswordRes.success) {
      res.status(200).json(changePasswordRes)
    } else {
      res.status(400).json(changePasswordRes)
    }
  } catch (error) {
    console.error(error)
    next(setError(400, "Can't change password"))
  }
}

const updatePreviousReadings = async (req, res, next) => {
  try {
    const { email } = req.params
    const { previousReadings } = req.body

    const updateRes = await updatePreviousReadingsInDB(email, previousReadings)
    if (updateRes.success) {
      res.status(200).json({ data: updateRes })
    } else {
      res.status(400).json(updateRes)
    }
  } catch (error) {
    next(setError(400, "Can't update previous readings"))
  }
}

const removePreviousReadings = async (req, res, next) => {
  try {
    const { email } = req.params
    const { previousReadings } = req.body

    console.log(previousReadings)

    const removeRes = await removePreviousReadingsInDB(email, previousReadings)
    if (removeRes.success) {
      res.status(200).json({ data: removeRes })
    } else {
      res.status(400).json(removeRes)
    }
  } catch (error) {
    next(setError(400, "Can't remove reading"))
  }
}

const updateLikes = async (req, res, next) => {
  try {
    const { email } = req.params
    const { likes } = req.body

    const updateRes = await updateOtakusLikesInDB(email, likes)
    if (updateRes.success) {
      res.status(200).json({ data: updateRes })
    } else {
      res.status(400).json(updateRes)
    }
  } catch (error) {
    next(setError(400, "Can't update likes"))
  }
}

module.exports = {
  getAllOtakus,
  getOtakuById,
  deleteOtaku,
  updateOtaku,
  loginOtaku,
  registerOtaku,
  changeEmail,
  changePassword,
  updatePreviousReadings,
  removePreviousReadings,
  updateLikes
}
