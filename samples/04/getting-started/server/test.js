const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require("path");

const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.static(path.resolve(__dirname, "../node_modules")));

io.on('connection', function(socket){
    console.log('A user connected');
});

server.listen(3000, function(){
    console.log('Serve is running on port 3000');
});
