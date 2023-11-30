const express = require('express')
const otakuRouter = express.Router()
const {
  getAllOtakus,
  getOtakuById,
  createOtaku,
  deleteOtaku,
  updateOtaku,
  loginOtaku
} = require('../controller/otaku')
const uploadMiddleware = require('../middleware/file')

otakuRouter.get('/', getAllOtakus)
otakuRouter.get('/:id', getOtakuById)
otakuRouter.post('/',uploadMiddleware.single('avatar'), createOtaku)
otakuRouter.post('/login', loginOtaku)
otakuRouter.put('/:id',uploadMiddleware.single('avatar'), updateOtaku)
otakuRouter.delete('/:id', deleteOtaku)


module.exports = otakuRouter
