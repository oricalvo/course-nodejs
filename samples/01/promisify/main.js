const fs = require("fs");

const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

readFileIfExists("1.txt").then(data => {
    console.log(data.toString());
}).catch(err => {
    console.error(err);
});

function readFileIfExists(filePath) {
    return stat("1.txt").then(stat => {
        if (stat.isFile()) {
            return readFile(filePath);
        }

        throw new Error("Not a file");
    });
}

function promisify(func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            args.push(callback);

            func.apply(this, args);

            function callback(err, res) {
                if(err) {
                    reject(err);
                    return;
                }

                resolve(res);
            }
        });
    }
}
