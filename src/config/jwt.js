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

const generateEmailConfirmationToken = (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' })
  console.log('token', token)
  return token
}

module.exports = {
  generateSign,
  verifyJwt,
  generateEmailConfirmationToken
}
