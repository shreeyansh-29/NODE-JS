//Debugging
const startingDebugger = require("debug")("app:starting");
const dbDebugger = require("debug")("app:db");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const courses = require("./routes/courses");
const render = require("./routes/render");

//Loggger
const logger = require("./middleware/logger");
//Authenticator
const authentication = require("./middleware/auth");
//Config
const config = require("config");

console.log("App Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()); //req.body
app.use(express.urlencoded({extended: true})); //key=value&key=value
app.use(express.static("public"));
app.use(helmet());
app.use("/api/courses", courses);
app.use("/", render);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startingDebugger("Morgan Enabled...");
}

dbDebugger("Connected to DB...");

//custom middleware
app.use(logger);
app.use(authentication);

// app.get("/api/posts/:year/:month", (req, res) => {
//   res.send(res.params);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
