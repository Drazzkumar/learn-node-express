const express = require("express")
const router = express.Router();
let courses = [
    {
        id: 1,
        name: "course1"
    }, {
        id: 2,
        name: "course2"
    }, {
        id: 3,
        name: "course3"
    }, {
        id: 4,
        name: "course4"
    }, {
        id: 5,
        name: "course5"
    }
];
router.get('/', (req, res) => {
    res.send(courses);
})

router.post('/', (req, res) => {
    let {error} = validateCourse(req.body);
    if (error) {
        res
            .status(400)
            .send(error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course)
})

router.get('/:id', (req, res) => {
    const course = courses.filter(c => c.id === parseInt(req.params.id))
    if (course.length > 0) {
        res.send(course[0]);
    } else {
        res.send("This course with the given id is not found");
    }
})

router.put('/:id', (req, res) => {
    // Look up the course If not existing ,return 404
    const course = courses.filter(c => c.id === parseInt(req.params.id));
    if (course.length < 1) 
        res.status(404).send("This course with the given id is not found");
    
    //validate if invalide, return 400-bad request
    let {error} = validateCourse(req.body);
    if (error) {
        res
            .status(400)
            .send(error.details[0].message);
        return;
    }

    //Update couese Return the updated course
    console.log(course, req.body.name);
    course[0].name = req.body.name;
    res.send(course[0]);

})

router.delete('/:id', (req, res) => {
    const course = courses.filter(c => c.id === parseInt(req.params.id));
    if (course.length < 1) {
        res
            .status(404)
            .send("The course with the given id is not found");
    }
    // const courses = courses.filter(c => c.id !== parseInt(req.params.id));
    courses = courses.filter(c => c.id !== parseInt(req.params.id));
    res.send(courses);
})
module.exports = router;