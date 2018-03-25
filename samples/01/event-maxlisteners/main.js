const EventEmitter = require("events");

const ev = new EventEmitter();

function createListener(i) {
    return function listener() {
        console.log(i);
    }
}

for(let i=0; i<20; i++) {
    ev.on("data", createListener(i));
}

ev.emit("data");

console.log("after");
