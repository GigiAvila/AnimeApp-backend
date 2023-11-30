const express = require('express')
const indexRouter = express.Router()
const mangaRouter = require('./manga')
const otakuRouter = require('./otaku')
const nodemailerRouter = require('./nodemailer')
const confirmationRouter = require('./confirmationAccont')

indexRouter.use('/mangas', mangaRouter)
indexRouter.use('/otakus', otakuRouter)
indexRouter.use('/email', nodemailerRouter)
indexRouter.use('/auth', confirmationRouter)

module.exports = indexRouter
