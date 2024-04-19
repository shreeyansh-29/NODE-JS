const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(new Error(err)));

const courseSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 5, maxlength: 255},
  category: {
    type: String,
    required: true,
    //if we'll try to select other value of category it will through error
    //to enter specific value
    enum: ["web", "mobile"],
    lowercase: true,
  },
  author: String,
  tags: {
    type: Array,
    //custom validator
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: "A Course Should have atleast one tag",
    },
  },
  date: {type: Date, default: Date.now},
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
    min: 10,
    max: 200,
    //when we read value
    get: v => Math.round(v),
    //when we set value
    set: v => Math.round(v),
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "NodeJs",
    category: "-",
    author: "Mosh",
    tags: null,
    isPublished: true,
    price: 15,
  });
  try {
    const result = await course.save();
    console.log("result", result);
  } catch (err) {
    //Course Validation failed
    console.log(err.message);
    // for (i in err.errors) {
    //   console.log(err.errors[i].message);
    // }
  }
}

createCourse();
