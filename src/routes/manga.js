const express = require('express')
const mangaRouter = express.Router()
const {
  getAllMangas,
  getMangaById,
  createManga,
  deleteManga,
  updateManga
} = require('../controller/manga')
const uploadMiddleware = require('../middleware/file')

mangaRouter.get('/', getAllMangas)
mangaRouter.get('/:id', getMangaById)
mangaRouter.post('/', uploadMiddleware.single('cover'), createManga)
mangaRouter.put('/:id', uploadMiddleware.single('cover'), updateManga)
mangaRouter.delete('/:id', deleteManga)

module.exports = mangaRouter
