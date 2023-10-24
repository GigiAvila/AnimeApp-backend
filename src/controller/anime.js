const {
  getAllAnimesFromDB,
  getAnimeByIdFromDB,
  createAnimeInDB,
  deleteAnimeFromDB,
  updateAnimeByIdInDB
} = require('../repositories/anime.js')
const { setError } = require('../config/error.js')

const getAllAnimes = async (req, res, next) => {
  try {
    const { filter } = req.query
    const animes = await getAllAnimesFromDB(filter)
    res.status(200).json({ data: animes })
  } catch (error) {
    return next(setError(400, "Can't find animes"))
  }
}

const getAnimeById = async (req, res, next) => {
  try {
    const { id } = req.params
    const animes = await getAnimeByIdFromDB(id)
    res.status(200).json({ data: animes })
  } catch (error) {
    return next(setError(400, "Can't find anime"))
  }
}

const createAnime = async (req, res, next) => {
  try {
    const newAnime = await createAnimeInDB({
      name: req.body.name,
      author: req.body.author,
      year: req.body.year,
      principalCharacter: req.body.principalCharacter,
      isOngoing: req.body.isOngoing,
      fans: req.body.fans
    })
    res.status(201).json({ data: newAnime })
  } catch (error) {
    return next(setError(201, "Can't create anime"))
  }
}

const deleteAnime = async (req, res) => {
  try {
    const { id } = req.params
    await deleteAnimeFromDB(id)

    res.status(200).json({
      data: `Ok, the anime with de id ${id} has been deleted from data base`
    })
  } catch (error) {
    return next(setError(201, "Can't delete anime"))
  }
}

const updateAnime = async (req, res, next) => {
  const { id } = req.params

  try {
    const updatedAnime = await updateAnimeByIdInDB(id, req.body)
    res.status(200).json({ data: updatedAnime })
  } catch (error) {
    next(setError(400, "Can't update anime"))
  }
}

module.exports = {
  getAllAnimes,
  getAnimeById,
  createAnime,
  deleteAnime,
  updateAnime
}
