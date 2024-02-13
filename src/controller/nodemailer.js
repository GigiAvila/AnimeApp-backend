const transporter = require('../config/nodemailer.js')
const { EMAILTEMPLATE } = require('../utils/emailTemplate.js')
const { CHANGEEMAILTEMPLATE } = require('../utils/changeEmailTemplate.js')
const { setError } = require('../config/error.js')
const { generateEmailConfirmationToken } = require('../config/jwt.js')

const sendGmailEmail = async (req, res, next) => {
  try {
    const { gmail, name } = req.body
    const emailConfirmationToken = generateEmailConfirmationToken(gmail)
    const confirmationLink = `http://localhost:5173/verifyAccount/${emailConfirmationToken}`

    await transporter.sendMail({
      from: 'Sent from <gigi.s.avila@gmail.com>',
      to: gmail,
      subject: 'Welcome to my Manga platform',
      html: EMAILTEMPLATE(name, confirmationLink)
    })

    res.status(200).json({
      data: `the email has been sent`
    })
    console.log('>>>>> Email sent...')
  } catch (error) {
    console.error('>>>>> Error sending email:', error)
    return next(setError(201, "Can't send mail"))
  }
}

const sendChangeEmail = async (req, res, next) => {
  try {
    const { email, name } = req.body
    const emailConfirmationToken = generateEmailConfirmationToken(email)
    const confirmationLink = `http://localhost:5173/verifyAccount/change-email/${emailConfirmationToken}`

    await transporter.sendMail({
      from: 'Sent from <gigi.s.avila@gmail.com>',
      to: email,
      subject: 'Confirm Email Change',
      html: CHANGEEMAILTEMPLATE(name, confirmationLink)
    })

    res.status(200).json({
      data: `the email has been sent`
    })
    console.log('>>>>> Email sent...')
  } catch (error) {
    console.error('>>>>> Error sending email:', error)
    return next(setError(201, "Can't send mail"))
  }
}

module.exports = { sendGmailEmail, sendChangeEmail }
