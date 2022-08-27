require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('../models/MovieModel');

// Add the model and array you want to seed
const movieSeed = [
  {
    "title": "Home Alone",
    "year": 1990,
    "director": "Chris Colombus",
    "duration": 103,
    "synopsis": "A kid is left alone at home while his family travels to Paris for Christmas. He then has to face two burglars with much creativity.",
    "image": "https://m.media-amazon.com/images/I/81EWrTadiJL._AC_SY679_.jpg"
  },
  {
    "title": "Home Alone",
    "year": 1990,
    "director": "Chris Colombus",
    "duration": 103,
    "synopsis": "A kid is left alone at home while his family travels to Paris for Christmas. He then has to face two burglars with much creativity.",
    "image": "https://m.media-amazon.com/images/I/81EWrTadiJL._AC_SY679_.jpg"
  },
  {
    "title": "Home Alone",
    "year": 1990,
    "director": "Chris Colombus",
    "duration": 103,
    "synopsis": "A kid is left alone at home while his family travels to Paris for Christmas. He then has to face two burglars with much creativity.",
    "image": "https://m.media-amazon.com/images/I/81EWrTadiJL._AC_SY679_.jpg"
  },
  {
    "title": "Home Alone",
    "year": 1990,
    "director": "Chris Colombus",
    "duration": 103,
    "synopsis": "A kid is left alone at home while his family travels to Paris for Christmas. He then has to face two burglars with much creativity.",
    "image": "https://m.media-amazon.com/images/I/81EWrTadiJL._AC_SY679_.jpg"
  }
]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Movie.create(movieSeed)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })