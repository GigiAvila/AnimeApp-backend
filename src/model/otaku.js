const mongoose = require('mongoose')
const { Schema } = mongoose

const otakuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    country: { type: String, trim: true },
    email: { type: String, required: true, trim: true }
  },
  {
    timestamps: true,
    collection: 'otakus'
  }
)

const Otaku = mongoose.model('Otaku', otakuSchema)

module.exports = Otaku
