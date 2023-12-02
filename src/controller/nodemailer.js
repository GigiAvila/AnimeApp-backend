const transporter = require('../config/nodemailer.js')
const { EMAILTEMPLATE } = require('../utils/emailTemplate.js')

const sendGmailEmail = async (req, res, next) => {
  try {
    const { gmail, name } = req.body

    await transporter.sendMail({
      from: 'Sent from <gigi.s.avila@gmail.com>',
      to: gmail,
      subject: 'Welcome to my Manga platform',
      html: EMAILTEMPLATE(name)
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
