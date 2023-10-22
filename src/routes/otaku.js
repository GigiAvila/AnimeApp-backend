const express = require('express')
const otakuRouter = express.Router()
const {
  getAllOtakus,
  getOtakuById,
  createOtaku,
  deleteOtaku,
  updateOtaku
} = require('../controller/otaku')

otakuRouter.get('/', getAllOtakus)
otakuRouter.get('/:id', getOtakuById)
otakuRouter.post('/', createOtaku)
otakuRouter.put('/:id', updateOtaku)
otakuRouter.delete('/:id', deleteOtaku)

module.exports = otakuRouter
