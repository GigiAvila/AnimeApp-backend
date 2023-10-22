const express = require('express')
const indexRouter = express.Router()
const animeRouter = require('./anime')
const otakuRouter = require('./otaku')

indexRouter.use('/animes', animeRouter)
indexRouter.use('/otakus', otakuRouter)

module.exports = indexRouter
