const jwt = require('jsonwebtoken')

const generateSign = (id) => {
  try {
    console.log(' >>>> Generating token for user ID:', id)
    const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    console.log(' >>>> Token generated successfully', token)
    return token
  } catch (error) {
    console.error('>>>> Error generating token:', error.message)
    throw error
  }
}

const verifyJwt = (token) => {
  try {
    const userToken = jwt.verify(token, process.env.JWT_SECRET)
    return userToken
  } catch (error) {
    console.error('Error verifying JWT. Token:', token)
    throw error
  }
}

module.exports = {
  generateSign,
  verifyJwt
}