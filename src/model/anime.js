const mongoose = require('mongoose')
const { Schema } = mongoose

const animeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  author: { type: String, trim: true },
  year: { type: Number, trim: true },
  principalCharacter: { type: String, trim: true },
  isOngoing: { type: Boolean, trim: true }
})

const Anime = mongoose.model('Anime', animeSchema)

module.exports = Anime
