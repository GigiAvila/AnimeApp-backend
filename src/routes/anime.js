const express = require('express')
const animeRouter = express.Router()
const {
  getAllAnimes,
  getAnimeById,
  createAnime,
  deleteAnime
} = require('../controller/anime')

animeRouter.get('/', getAllAnimes)
animeRouter.get('/:id', getAnimeById)
animeRouter.post('/', createAnime)
// animeRouter.put('/:id', editStudent)
animeRouter.delete('/:id', deleteAnime)

module.exports = animeRouter
