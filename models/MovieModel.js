const { Schema, model } = require('mongoose');

const MovieSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    director: {
        type: String,
        required: true
      },
    duration: {
        type: Number,
        required: true
      },
    synopsis: {
        type: String,
        required: true
      },
    image: {
        type: String,
        required: true
      }
  },
  {
    timestamps: true
  }
);

const Movie = model('Movie', MovieSchema);

module.exports = Movie;