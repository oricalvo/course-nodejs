// function log(message) {
//     console.log(message);
// }

const log = console.log.bind(console, "XXX>");

log("123");


