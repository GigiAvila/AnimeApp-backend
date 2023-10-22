const {
  getAllAnimesFromDB,
  getAnimeByIdFromDB,
  createAnimeInDB,
  deleteAnimeFromDB,
  updateAnimeByIdInDB
} = require('../repositories/anime.js')

const getAllAnimes = async (req, res) => {
  const { filter } = req.query
  const animes = await getAllAnimesFromDB(filter)
  res.status(200).json({ data: animes })
}

const getAnimeById = async (req, res) => {
  const { id } = req.params
  const animes = await getAnimeByIdFromDB(id)
  res.status(200).json({ data: animes })
}

const createAnime = async (req, res) => {
  const newAnime = await createAnimeInDB({
    name: req.body.name,
    author: req.body.author,
    year: req.body.year,
    principalCharacter: req.body.principalCharacter,
    isOngoing: req.body.isOngoing
  })
  res.status(201).json({ data: newAnime })
}

const deleteAnime = async (req, res) => {
  const { id } = req.params
  await deleteAnimeFromDB(id)

  res.status(200).json({
    data: `Ok, the anime with de id ${id} has been deleted from data base`
  })
}

const updateAnime = async (req, res, next) => {
  const { id } = req.params
  const { name, author, year, principalCharacter, isOngoing } = req.body

  const updatedAnime = await updateAnimeByIdInDB(id, {
    name,
    author,
    year,
    principalCharacter,
    isOngoing
  })
  res.status(200).json({ data: updatedAnime })
}

module.exports = {
  getAllAnimes,
  getAnimeById,
  createAnime,
  deleteAnime,
  updateAnime
}
