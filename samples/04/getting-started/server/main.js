const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.static(path.resolve(__dirname, "../node_modules")));

io.on('connection', function(socket){
    console.log('a user connected', socket.id);

    console.log(Object.keys(io.sockets.connected));

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        //io.emit('chat message', msg);
        //socket.emit('chat message', msg);
        //socket.broadcast.emit('chat message', msg);
        io.to(Object.keys(io.sockets.connected)[1]).emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

// unicast to current client
socket.emit('message', 'hey there client');

// broadcast to all clients including sender
io.sockets.emit('message', 'hello everyone!');

// short form, same thing
io.emit('message', 'hello everyone!');

// broadcast to all clients excluding sender
socket.broadcast.emit('message', 'surprise party');

// unicast by socketid
io.to(socketid).emit('message', 'your eyes only');
