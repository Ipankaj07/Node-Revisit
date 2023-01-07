const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  rating: { type: Number, required: true },
  cast: { type: Array, required: true },
  isWatched: { type: Boolean, required: true },
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;