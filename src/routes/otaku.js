const express = require('express')
const otakuRouter = express.Router()
const {
  getAllOtakus,
  getOtakuById,
  createOtaku,
  deleteOtaku
} = require('../controller/otaku')

otakuRouter.get('/', getAllOtakus)
otakuRouter.get('/:id', getOtakuById)
otakuRouter.post('/', createOtaku)
// otakuRouter.put('/:id', editStudent)
otakuRouter.delete('/:id', deleteOtaku)

module.exports = otakuRouter
