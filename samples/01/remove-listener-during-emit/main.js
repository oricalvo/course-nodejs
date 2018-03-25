const EventEmitter = require("events");

const ev = new EventEmitter();

function listener1() {
    console.log("listener1");
    ev.removeListener("data", listener2);
}

function listener2() {
    console.log("listener2");
}

ev.on("data", listener1);
ev.on("data", listener2);

ev.emit("data");
