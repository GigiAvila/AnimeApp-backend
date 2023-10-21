const mongoose = require('mongoose')
const { Schema } = mongoose

const animeSchema = new mongoose.Schema({
  _animeId: { type: Number, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  year: { type: Number, required: true, trim: true },
  principalCharacter: { type: String, required: true, trim: true },
  isOngoing: { type: Boolean, required: true, trim: true },
  _fans: [{ type: Number, required: true, trim: true }]
})

const Anime = mongoose.model('Anime', animeSchema)

module.exports = Anime
