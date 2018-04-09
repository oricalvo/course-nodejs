const fs = require("fs");
const zlib = require("zlib");
const { Transform } = require('stream');

// class Replace extends Transform {
//     constructor(from, to) {
//         super();
//
//         this.from = from;
//         this.to = to;
//     }
//
//     _transform(chunk, encoding, callback) {
//         callback(null, chunk.toString().replace(/${from}/g, "?"));
//     }
// }

main();

async function main() {
    await compress("main.js", "main.js.gz");
}

function compress(source, dest) {
    return new Promise((resolve, reject) => {
        fs.createReadStream(source)
            .on("error", function (err) {
                reject(err);
            })
            .pipe(zlib.createGzip())
            .on("error", function (err) {
                reject(err);
            })
            .pipe(fs.createWriteStream(dest))
            .on("error", function (err) {
                reject(err);
            })
            .on("finish", function () {
                resolve();
            });
    });
}
