const EventEmitter = require('events');

let url = 'http://example.com/log';
class Logger extends EventEmitter {
    log(message) {
        //send an HTTP request
        console.log(message);

        // Raise an events
        this.emit('messageLogged', {
            id: 1,
            url: "http://"
        });

    }
}

module.exports = Logger;