/**
|--------------------------------------------------
| Get all the published coursed that are tags with fontend or backend
| sorted with price in desending order
| show name and author
|--------------------------------------------------
*/

const mongoose = require('mongoose');
const url = "mongodb://localhost/demo";

mongoose
    .connect(url)
    .then(() => console.log("connected to db"))
    .catch((e) => console.log("Something wrong", e))
    const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model("coursedata", courseSchema);

/**
|--------------------------------------------------
| frontend or backend
| tags:{$in:['frontend','backend']}
| or using "or" logical operator
| find({isPublished:true}).or([{tags:'fontend'},{tags:'backend'}])
|--------------------------------------------------
*/

async function getCourse() {
    return await Course
        .find({
        isPublished: true,
        tags: {
            $in: ['frontend', 'backend']
        }
    })
        .sort("-price")
        .select("name author price")
}

async function display() {
    const result = await getCourse();
    console.log(result);
}

display();