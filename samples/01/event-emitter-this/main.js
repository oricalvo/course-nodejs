const EventEmitter = require("events");

const event = new EventEmitter();

event.on("data", function(num) {
    console.log(this == event);
    console.log(num == 42);
});

event.emit("data", 42);
