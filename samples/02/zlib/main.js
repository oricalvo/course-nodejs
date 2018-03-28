const fs = require("fs");
const zlib = require("zlib");
const {promisify} = require("es6-promisify");
const rename = promisify(fs.rename);

main();

async function main() {
    await zip("main.js", "main.js.gz");
    await rename("temp/main.js.gz", "done/main.js.gz");
}

function zip(dest, source) {
    return new Promise((resolve,reject)=> {
        fs.createReadStream("main.js")
            .pipe(zlib.createGzip())
            .pipe(fs.createWriteStream("temp/main.js.gz"))
            .on("finish", function () {
                resolve();
            });
    });
}

