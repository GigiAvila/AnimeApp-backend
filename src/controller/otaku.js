const {
  getAllOtakusFromDB,
  getOtakuByIdFromDB,
  createOtakuInDB,
  deleteOtakuFromDB,
  updateOtakuByIdInDB,
  loginOtakuInDB
} = require('../repositories/otaku.js')
const { setError } = require('../config/error.js')

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

const createOtaku = async (req, res, next) => {
  try {
    const newOtaku = await createOtakuInDB({
      name: req.body.name,
      surname: req.body.surname,
      country: req.body.country,
      email: req.body.email,
      password: req.body.password,
      premium: req.body.premium,
      paymentMethod: req.body.paymentMethod,
      language: req.body.language,
      avatar:  req.file.path 

    })
    console.log(req.file.path)
    res.status(201).json({ data: newOtaku })
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
    const { name, surname, country, email, _favoriteManga, paymentMethod, language, premium } = req.body

    const otaku = await updateOtakuByIdInDB(id, {
      name,
      surname,
      country,
      email,
      _favoriteManga,
      paymentMethod,
      language,
      premium
    })
    res.status(200).json({ data: otaku })
  } catch (error) {
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
      res.status(200).json({ data: loginRes.message, token: loginRes.token })
    } else {
      res.status(401).json({ error: loginRes.message })
    }
  } catch (error) {
    console.error(error)
    return next(setError(400, "Can't login"))
  }
}

module.exports = {
  getAllOtakus,
  getOtakuById,
  createOtaku,
  deleteOtaku,
  updateOtaku,
  loginOtaku
}
