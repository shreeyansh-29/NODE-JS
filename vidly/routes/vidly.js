const express = require("express");
const router = express.Router();
const Joi = require("joi");

const movies = [
  {id: 1, name: "Badshah"},
  {id: 2, name: "Boss"},
];

router.get("/", (req, res) => {
  res.status(200).send(movies);
});

router.get("/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.send(404).status("Not Found");

  res.status(200).send(movie);
});

router.post("/", (req, res) => {
  const {error} = validateMovie(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const movie = {id: movies.length + 1, name: req.body.name};

  movies.push(movie);
  res.status(201).send(movies);
});

router.put("/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send("Not Found");

  const {error} = validateMovie(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  movie.name = req.body.name;
  res.status(200).send(movies);
});

router.delete("/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send("Not Found");

  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  res.status(200).send(movies);
});

function validateMovie(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}

module.exports = router;
