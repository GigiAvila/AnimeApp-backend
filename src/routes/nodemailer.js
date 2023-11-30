const express = require('express')
const nodemailerRouter = express.Router()
const {sendGmailEmail} = require('../controller/nodemailer')
const { isAuth } = require('../middleware/auth')

nodemailerRouter.post('/', sendGmailEmail )

module.exports = nodemailerRouter