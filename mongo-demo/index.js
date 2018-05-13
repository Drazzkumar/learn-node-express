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
// createCourse();

async function getCourse() {
    /**
    |--------------------------------------------------
    | eq (equal)
    | ne (not equal)
    | gt (greater than)
    | gte (greater than or equal to)
    | lte (less than)
    | lte (less than or equal to)
    | in
    | nin (not in)
    | ========> find({price: {$gt:10}}) <=====
    | ========>  find({price: {$gte:10,$lte:20}}) <=====
    | ========>  find({price: {$in:[10,15,20]}}) <=====price=10 or 15 or 20
    |--------------------------------------------------
    */
    const pageNumber = 2,
        pageSize = 10;
    c
    // =>/api/courses?pageNumber=2&pageSize=10 to skip previosu page
    // (pageNumber-1)*pageSize
    const courses = await Course
        .find({author: "Mosh", isPublished: true})
        .skip((pageNumber - 1) * pageSize)
        .limit(2)
        .sort({name: 1})
        .select({name: 1, tags: 1});
    // => .count() return how many data are there

    console.log(courses);
}

async function removeCourse(id) {
    /**
|--------------------------------------------------
| Course.deleteOne({isPublished:false});
| findByIdAndRemove(id)
const result = await Course.deleteOne({_id: id})
|--------------------------------------------------
*/
    const result = await Course.findByIdAndRemove(id);
    console.log(result);

}
removeCourse("5af7031e39a15f2fe99a16a5");