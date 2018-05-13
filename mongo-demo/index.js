const mongoose = require('mongoose');
// const url = "mongodb://razz:razz@ds123124.mlab.com:23124/demo"
const url = "mongodb://localhost/demo"
mongoose
    .connect(url)
    .then(() => console.log("connected to mongodb"))
    .catch((err) => console.error("couldnot connect to the mongodb", err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
});

// Classes , Objects Human, John

const Course = mongoose.model('Course', courseSchema);
async function createCourse() {

    const course = new Course({
        name: "react course",
        author: "raj",
        tags: [
            "ract", "fonted"
        ],
        isPublished: true
    });
    const result = await course.save();
    console.log(result);
}
createCourse();

async function getCourse() {
    const courses = await Course
        .find({author: "Mosh", isPublished: true})
        .limit(2)
        .sort({name: 1})
        .select({name: 1, tags: 1});
    console.log(courses);
}

getCourse();