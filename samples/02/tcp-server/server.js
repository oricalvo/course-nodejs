var net = require('net');

var server = net.createServer(function(socket) {
    console.log("New connection");

    socket.pipe(socket).on("error", function(err) {
        console.error(err);
    });
});

server.listen(1337, '127.0.0.1');
