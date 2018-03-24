const log = console.log.bind(console, "lib>");

function doSomething() {
    log("doSomething");
}

exports.doSometing = doSomething;

console.log(module);
