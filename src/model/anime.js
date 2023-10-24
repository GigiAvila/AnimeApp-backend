const mongoose = require('mongoose')
const { Schema } = mongoose

const animeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    author: { type: String, required: false, trim: true },
    format: [{ type: String, required: false, enum: ['manga', 'anime'] }],
    year: { type: Number, required: false, trim: true },
    principalCharacter: { type: String, required: false, trim: true },
    isOngoing: { type: Boolean, required: false, trim: true, default: false },
    fans: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Otaku', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'animes'
  }
)

const Anime = mongoose.model('Anime', animeSchema)

module.exports = Anime
