const net = require('net');

const server = net.createServer(socket => {
    console.log("socket");

    socket.on("error", function(err) {
        console.error(err);
    });

    socket.on("data", function(data) {
        console.log(Buffer.isBuffer(data));

        console.log(data.readInt16LE(0));

        // const view = new Uint32Array(data.buffer);
        // console.log(view[0]);
    });
});

server.listen(3001);

server.on("listening", function() {
    console.log("Server is running");
});
