const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(new Error(err)));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: {type: Date, default: Date.now},
  isPublished: Boolean,
});

//we compiled schema to get model
//from model we create a class
const Course = mongoose.model("Course", courseSchema);
//instance of a class

async function createCourse() {
  const course = new Course({
    name: "NodeJs",
    author: "Mosh",
    tags: ["Node", "backend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const courses = await Course.find({author: "Mosh", isPublished: true})
    .limit(10)
    .sort({name: 1})
    .select({name: 1, tags: 1});
  console.log(courses);
}

async function updateCourse1(id) {
  //Approach: Query First
  //findById()
  //Modification
  //save()

  const course = await Course.findById(id);
  if (!course) return;

  //first-way
  // course.isPublished = true;
  // course.author = "Another Author";

  //Using set()
  course.set({
    isPublished: true,
    author: "Another Author",
  });

  const res = await course.save();
  console.log(res);
}

async function updateCourse2(id) {
  ///Approach: Update First
  //Update directly
  //Optionally: get updated document

  //first-way

  // const res = await Course.update(
  //   {_id: id},
  //   {
  //     $set: {
  //       isPublished: false,
  //       author: "Shreeyansh",
  //     },
  //   }
  // );

  // console.log(res);

  //second way
  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "John",
        isPublished: true,
      },
    },
    {new: true}
  );

  console.log(course);
}

async function deleteCourse(id) {
  const res = await Course.deleteOne({_id: id});

  console.log(res);
}

createCourse();
