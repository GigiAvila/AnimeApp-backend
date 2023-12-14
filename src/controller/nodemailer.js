const transporter = require('../config/nodemailer.js')
const { EMAILTEMPLATE } = require('../utils/emailTemplate.js')
const { setError } = require('../config/error.js')
const { generateEmailConfirmationToken } = require('../config/jwt.js')

const sendGmailEmail = async (req, res, next) => {
  try {
    const { gmail, name } = req.body
    const emailConfirmationToken = generateEmailConfirmationToken(gmail)
    const confirmationLink = `http://localhost:5173/verifyAccount/${emailConfirmationToken}`
    console.log(confirmationLink)

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

module.exports = { sendGmailEmail }
