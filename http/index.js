const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([
            {
                1: "yo yo"
            }, {
                2: "raj"
            }, {
                3: "kumar"
            }, {
                4: "raj"
            }
        ]));
        res.end();
    }
});

// server.on('connection', (socket) => {     console.log('New connection
// establish'); })

server.listen(3000);

console.log('App is listening on prot 3000...');
