const {doSometing} = require("./lib");

const log = console.log.bind(console, "main>");

init(); 

module.paths.push("c:\\1");

require("test");

function init() {
    log("init");

    doSometing();
}

