const { Router } = require("express");

const Movie = require("../models/movie.model");

const movieRouter = Router();

movieRouter.get("/", async (req, res) => {
  try {
    let title = req.query.title ? req.query.title : "";
    let rating = req.query.rating ? req.query.rating : "";
    let sortBy = req.query.sortBy ? req.query.sortBy : "rating:desc";
    let page = req.query.page ? req.query.page : 1;
    let limit = req.query.limit ? req.query.limit : 10;

    let filter = {};

    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }
    if (rating) {
      filter.rating = { $gte: rating };
    }

    if (sortBy) {
      let parts = sortBy.split(":");
      sortBy = {};
      sortBy[parts[0]] = parts[1] === "desc" ? -1 : 1;
    }

    let movies = await Movie.find(filter)
      .sort(sortBy)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      page: page,
      limit: limit,
      movies: movies,
    });
  } catch (err) {}
});

movieRouter.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

movieRouter.post("/", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json({
      message: "Movie created successfully",
      movie: movie,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

movieRouter.patch("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      movie.title = req.body.title;
      movie.genre = req.body.genre;
      movie.year = req.body.year;
      movie.rating = req.body.rating;
      movie.cast = req.body.cast;
      movie.isWatched = req.body.isWatched;
      await movie.save();
      res.json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

movieRouter.delete("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      await movie.remove();
      res.json({ message: "Movie deleted successfully" });
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = movieRouter;
