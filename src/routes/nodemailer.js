const express = require('express')
const nodemailerRouter = express.Router()
const { sendGmailEmail } = require('../controller/nodemailer')

nodemailerRouter.post('/', sendGmailEmail)

module.exports = nodemailerRouter
