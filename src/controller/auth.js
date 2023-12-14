const { verifyJwt } = require('../config/jwt')
const Otaku = require('../model/otaku')

const confirmAccount = async (req, res, next) => {
  try {
    const { token } = req.params
    const decodedToken = verifyJwt(token)
    console.log(token)

    const otaku = await Otaku.findOneAndUpdate(
      { emailConfirmationToken: token },
      { $set: { verifyEmail: true } }
    )

    if (!otaku) {
      return res.status(404).json({ success: false, message: 'Invalid token' })
    }

    return res
      .status(200)
      .json({ success: true, message: 'Account confirmed successfully' })
  } catch (error) {
    console.error('Error confirming account:', error)

    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
}

module.exports = { confirmAccount }
