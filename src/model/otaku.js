const mongoose = require('mongoose')
const { Schema } = mongoose

const otakuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: false, trim: true },
    country: { type: String, required: false, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: false, trim: true },
    emailConfirmationToken: { type: String, default: '-', required: false },
    verifyEmail: { type: Boolean, required: false, default: false, trim: true },
    premium: { type: Boolean, default: false, required: false },
    paymentMethod: {
      type: String,
      required: false,
      enum: ['credit card', 'debit card', 'Paypal'],
      trim: true
    },
    language: {
      type: String,
      required: false,
      enum: [
        'english',
        'spanish',
        'italian',
        'danish',
        'french',
        'chinese',
        'corean',
        'japanese',
        'hindi'
      ],
      trim: true
    },
    avatar: { type: String, required: false, trim: true }
  },
  {
    timestamps: true,
    collection: 'otakus'
  }
)

const Otaku = mongoose.model('Otaku', otakuSchema)

module.exports = Otaku
