const http = require('http');

const requestHandler = (req, res) => {
    res.end('Hello Node.js Server!');
}

const server = http.createServer(requestHandler);

server.listen(3000, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is running`);
});
