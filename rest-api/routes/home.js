const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index', {
        title: "My RestApi",
        message: "Hello bro"
    })
})
module.exports = router;