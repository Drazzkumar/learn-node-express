const config = require("config")
const express = require("express");
const app = express();
const log = require('./logger');
const Joi = require('joi');
const courses = require('./routes/courses')
const home = require('./routes/home')
const helmet = require('helmet');
const morgan = require('morgan');
const debug = require("debug")('app:startup');

app.set('view engine', 'pug');
// app.set("views","./views") =default -npm rc =>cofiguration -npm config
// =>configuration morgan middleware helps to log
app.use(helmet());
if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
    debug("Morgan enabel..");

}
app.use(express.json());
app.use(log);

app.use(function (req, res, next) {
    console.log("authenticating.....");
    next();
});
console.log("Application Name : " + config.get('name'));
console.log("Mail Server : " + config.get('mail.host'));
console.log("Mail Password : " + config.get('mail.password'));

//routing home page
app.use('/', home);

//routing courses api
app.use("/api/courses", courses);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("listioning on port ", port);
})

function validateCourse(course) {
    const schema = {
        name: Joi
            .string()
            .min(3)
            .required()
    };
    return Joi.validate(course, schema);
}
