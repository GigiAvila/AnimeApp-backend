const mongoose = require('mongoose');
const { Schema } = mongoose;

const otakuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    country: { type: String, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: false, trim: true },
    verifyEmail: { type: Boolean, required: false },
    premium: { type: Boolean, required: true },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['credit card', 'debit card', 'Paypal'], 
      trim: true,
    },
    language: {
      type: String,
      required: true,
      enum: [ 'english',
      'spanish',
      'italian',
      'danish',
      'french',
      'chinese',
      'corean',
      'japanese',
      'hindi',], 
      trim: true,
    },
    avatar: { type: String, required: false, trim: true },
  },
  {
    timestamps: true,
    collection: 'otakus',
  }
);

const Otaku = mongoose.model('Otaku', otakuSchema);

module.exports = Otaku;