const {
  getAllOtakusFromDB,
  getOtakuByIdFromDB,
  createOtakuInDB,
  deleteOtakuFromDB,
  updateOtakuByIdInDB
} = require('../repositories/otaku.js')

const getAllOtakus = async (req, res) => {
  const { filter } = req.query
  const otakus = await getAllOtakusFromDB(filter)
  res.status(200).json({ data: otakus })
}

const getOtakuById = async (req, res) => {
  const { id } = req.params
  const otakus = await getOtakuByIdFromDB(id)
  res.status(200).json({ data: otakus })
}

const createOtaku = async (req, res) => {
  try {
    const newOtaku = await createOtakuInDB({
      name: req.body.name,
      surname: req.body.surname,
      country: req.body.country,
      email: req.body.email
    })
    res.status(201).json({ data: newOtaku })
  } catch (error) {
    res.status(404).json({ data: error })
  }
}

const deleteOtaku = async (req, res) => {
  try {
    const { id } = req.params
    await deleteOtakuFromDB(id)

    res.status(200).json({
      data: `Ok, The otaku with de id ${id} has been deleted from data base`
    })
  } catch (error) {
    res.status(404).json({ error: error })
  }
}

const updateOtaku = async (req, res) => {
  const { id } = req.params
  const { name, surname, country, email, _favoriteAnime } = req.body

  const otaku = await updateOtakuByIdInDB(id, {
    name,
    surname,
    country,
    email,
    _favoriteAnime
  })
  res.status(200).json({ data: otaku })
}

module.exports = {
  getAllOtakus,
  getOtakuById,
  createOtaku,
  deleteOtaku,
  updateOtaku
}
