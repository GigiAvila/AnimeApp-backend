const express = require('express')
const confirmationRouter = express.Router()
const { confirmAccount } = require('../controller/auth')

confirmationRouter.get('/:token', confirmAccount)

module.exports = confirmationRouter
