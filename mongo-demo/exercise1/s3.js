/**
|--------------------------------------------------
| Get all the published courses that are $15 or more
| or have the word "by" in their title.
|--------------------------------------------------
*/

const mongoose = require('mongoose');
const URL = 'mongodb://localhost/demo';
mongoose
    .connect(URL)
    .then(() => console.log("connection successful.."))
    .catch(e => console.error("ERROR", e));

const courseSchma = mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('coursedata', courseSchma);

async function getCourses() {
    const data = await Course
        .find({isPublished: true})
        .or([
            {
                price: {
                    $gte: 15
                }
            }, {
                name: /.*by.*/
            }
        ])
        .sort("-price")
    console.log(data);
}
getCourses();