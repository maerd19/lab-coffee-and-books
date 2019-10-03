const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['Coffee shop', 'Bookstore']
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Place', placeSchema);