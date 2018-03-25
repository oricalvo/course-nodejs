const EventEmitter = require("events");

const event = new EventEmitter();

event.on("data", function() {
    console.log("listener1");
});

event.on("data", function() {
    console.log("listener2");
});

console.log("before");
event.emit("data");
console.log("after");
