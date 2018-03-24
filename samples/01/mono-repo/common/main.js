const {promisify} = require("es6-promisify");
const fs = require("fs");
const path = require("path");

const readFile = promisify(fs.readFile);

async function run() {
    await printVersion(__dirname);
}

async function printVersion(dirname) {
    const package = JSON.parse(await readFile(path.resolve(dirname, "./package.json")));
    console.log(path.parse(dirname).name + " " + package.version);
}

exports.run = run;
exports.printVersion = printVersion;
