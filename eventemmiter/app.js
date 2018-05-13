const EventEmmitter = require('events');
// const emmiter = new EventEmmitter();

const Logger = require("./logger");
const logger = new Logger();
logger.on('messageLogged', (arg) => {
    console.log("listener Called ", arg);
});

logger.log("message");

// //handling logging event emmiter.on("logging", (arg) => {
// console.log(arg.message); }) //Raise : logging (data : message)
// emmiter.emit('logging', {message: "You are logging"})