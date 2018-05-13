const mongoose = require("mongoose");

const url = 'mongodb://localhost/demo';

mongoose
    .connect(url)
    .then(() => console.log("connected to the mongodb"))
    .catch((err) => console.error("could not connect to the mongodb", err));

const courseSchema = new mongoose.Schema({
    tags: [String],
    data: {
        type: Date,
        default: Date.now
    },
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});

// first parameter
const ECourse = mongoose.model("coursedata", courseSchema);

async function createCourse() {
    const course = new ECourse({
        name: "Express mongo course",
        author: "razzkumar",
        tags: [
            "javasctipt", "backend"
        ],
        isPublished: true,
        price: 10
    });
    const result = await course.save();
    console.log(result);
}

// createCourse();

async function getCourse() {
    const resultCourse = await ECourse
        .find({isPublished: true})
        .sort({name: 1})
        .select("name author price")
    // .select({name: 1, author: 1})
    console.log(resultCourse);
}
getCourse();