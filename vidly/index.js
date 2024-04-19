const express = require("express");
const app = express();
const vidly = require("./routes/vidly")

app.use(express.json()); //req.body
app.use("/api/courses",vidly)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port:${port}`));
