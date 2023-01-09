const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  {id: 1, name: "Hello"},
  {id: 2, name: "Hello1"},
  {id: 3, name: "Hello2"},
];

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("NOT FOUND");
  else return res.status(200).send(course);
});

app.post("/api/courses", (req, res) => {
  const result = validate(req.body);

  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("NOT FOUND");

  const result = validate(req.body);

  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }

  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("NOT FOUND");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(courses);
});

// app.get("/api/posts/:year/:month", (req, res) => {
//   res.send(res.params);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

function validate(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}
