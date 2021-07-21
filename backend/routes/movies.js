const router = require("express").Router();

const Movie = require("../models/Movie");

//get all movies
router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send(movies);
  } catch {
    res.status(404);
    res.send({ error: "movies don't exist" });
  }
});

module.exports = router;
