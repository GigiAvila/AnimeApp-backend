const express = require('express')
const otakuRouter = express.Router()
const {
  getAllOtakus,
  getOtakuById,
  deleteOtaku,
  updateOtaku,
  loginOtaku,
  registerOtaku,
  changePassword
} = require('../controller/otaku')
const uploadMiddleware = require('../middleware/file')

otakuRouter.get('/', getAllOtakus)
otakuRouter.get('/:id', getOtakuById)
otakuRouter.post('/register', uploadMiddleware.single('avatar'), registerOtaku)
otakuRouter.post('/login', loginOtaku)
otakuRouter.put('/:email', uploadMiddleware.single('avatar'), updateOtaku)
otakuRouter.put('/change-password/:email', changePassword)
otakuRouter.delete('/:id', deleteOtaku)

module.exports = otakuRouter
