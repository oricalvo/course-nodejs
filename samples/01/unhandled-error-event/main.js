const EventEmitter = require("events");

const event = new EventEmitter();

try {
    event.emit("error", new Error("Oooops"));
}
catch(err) {
    console.log("after");
}
