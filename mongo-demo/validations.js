const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(new Error(err)));

const courseSchema = new mongoose.Schema({
  name: {type: String, required: true},
  author: String,
  tags: [String],
  date: {type: Date, default: Date.now},
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    // name: "NodeJs",
    author: "Mosh",
    tags: ["Node", "backend"],
    isPublished: true,
  });
  try {
    const result = await course.save();
    console.log("result", result);
  } catch (error) {
    //Course Validation failed
    console.log(error.message);
  }
}

createCourse();
