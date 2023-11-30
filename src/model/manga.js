const mongoose = require('mongoose')
const { Schema } = mongoose

const mangaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    author: { type: String, required: false, trim: true },
    format: [{ type: String, required: false, enum: ['manga', 'manga'] }],
    year: { type: Number, required: false, trim: true },
    principalCharacter: { type: String, required: false, trim: true },
    isOngoing: { type: Boolean, required: false, trim: true, default: false },
    fans: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Otaku', required: false }
    ],
    issues: { type: Number, required: false, trim: true },
    cover:  { type: String, required: false, trim: true },
  },
  {
    timestamps: true,
    collection: 'mangas'
  }
)

const Manga = mongoose.model('Manga', mangaSchema)

module.exports = Manga
