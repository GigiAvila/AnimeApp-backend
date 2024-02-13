const express = require('express')
const nodemailerRouter = express.Router()
const { sendGmailEmail, sendChangeEmail } = require('../controller/nodemailer')

nodemailerRouter.post('/', sendGmailEmail)
nodemailerRouter.post('/change-email', sendChangeEmail)

module.exports = nodemailerRouter
