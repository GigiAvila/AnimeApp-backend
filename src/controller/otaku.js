const {
  getAllOtakusFromDB,
  getOtakuByIdFromDB,
  deleteOtakuFromDB,
  updateOtakuByIdInDB,
  loginOtakuInDB,
  registerOtakuInDB
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
    const {
      name,
      surname,
      country,
      email,
      language,
      password,
      premium,
      paymentMethod
    } = req.body

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
      premium,
      paymentMethod
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
    const { id } = req.params
    const {
      name,
      surname,
      country,
      email,
      _favoriteManga,
      paymentMethod,
      language,
      premium
    } = req.body
    const avatar = req.file ? req.file.path : undefined

    const updatedData = {
      name,
      surname,
      country,
      email,
      _favoriteManga,
      paymentMethod,
      language,
      premium,
      avatar
    }

    const updateRes = await updateOtakuByIdInDB(id, updatedData)
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

module.exports = {
  getAllOtakus,
  getOtakuById,
  deleteOtaku,
  updateOtaku,
  loginOtaku,
  registerOtaku
}
