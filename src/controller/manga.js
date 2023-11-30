const {
  getAllMangasFromDB,
  getMangaByIdFromDB,
  createMangaInDB,
  deleteMangaFromDB,
  updateMangaByIdInDB
} = require('../repositories/manga.js')
const { setError } = require('../config/error.js')

const getAllMangas = async (req, res, next) => {
  try {
    const { filter } = req.query
    const mangas = await getAllMangasFromDB(filter)
    res.status(200).json({ data: mangas })
  } catch (error) {
    console.log(error)
    return next(setError(400, "Can't find mangas"))
  }
}

const getMangaById = async (req, res, next) => {
  try {
    const { id } = req.params
    const mangas = await getMangaByIdFromDB(id)
    res.status(200).json({ data: mangas })
  } catch (error) {
    return next(setError(400, "Can't find manga"))
  }
}

const createManga = async (req, res, next) => {
  try {
    const newManga = await createMangaInDB({
      name: req.body.name,
      author: req.body.author,
      year: req.body.year,
      principalCharacter: req.body.principalCharacter,
      isOngoing: req.body.isOngoing,
      fans: req.body.fans,
      issues: req.body.issues,
      cover: req.files? req.file.path : null
    })
    res.status(201).json({ data: newManga })
  } catch (error) {
    return next(setError(201, "Can't create manga"))
  }
}

const deleteManga = async (req, res) => {
  try {
    const { id } = req.params
    await deleteMangaFromDB(id)

    res.status(200).json({
      data: `Ok, the manga with de id ${id} has been deleted from data base`
    })
  } catch (error) {
    return next(setError(201, "Can't delete manga"))
  }
}

const updateManga = async (req, res, next) => {
  const { id } = req.params

  try {
    const updatedManga = await updateMangaByIdInDB(id, req.body)
    res.status(200).json({ data: updatedManga })
  } catch (error) {
    next(setError(400, "Can't update manga"))
  }
}

module.exports = {
  getAllMangas,
  getMangaById,
  createManga,
  deleteManga,
  updateManga
}
