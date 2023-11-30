const { verifyJwt } = require('../config/jwt')
const { setError } = require('../config/error')
const Otaku = require('../model/otaku')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return next(setError(400, 'You have to introduce your token'))
    }

    const parsedToken = token.replace('Bearer ', '')
    const validToken = verifyJwt(parsedToken)
    const userLogued = await Otaku.findById(validToken.id)

    if (!userLogued) {
      return next(setError(404, 'User not found'))
    }

    userLogued.password = null
    req.user = userLogued
    next()
  } catch (err) {
    console.error(err)
    return next(setError(400, 'Wrong authorization'))
  }
}

module.exports = { isAuth }