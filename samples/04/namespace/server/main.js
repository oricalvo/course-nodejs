const cluster = require('cluster');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require("path");

console.log("isMaster", cluster.isMaster);

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.static(path.resolve(__dirname, "../node_modules")));

const ns = io.of("/chat");

ns.on('connection', function(socket){
    console.log('a user connected', socket.id);

    socket.join("room1");

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        ns.in("room1").emit('chat message', msg);
        //socket.broadcast.to("room1").emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

var io = require('socket.io')(3000);
var redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379 }));