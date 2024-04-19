const express = require("express");
const render = express.Router();

render.get("/", (req, res) => {
  res.render("index", {title: "Hello", message: "BYBYBYBYY"});
  // res.send("Hello World!!!");
});

module.exports = render;
