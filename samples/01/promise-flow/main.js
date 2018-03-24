const fs = require("fs");

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

function readFile(filePath) {
    return new Promise((resolve, reject)=> {
        fs.readFile(filePath, function(err, data) {
            if(err) {
                reject(err);
                return;
            }

            resolve(data);
        });
    });
}

function stat(filePath) {
    return new Promise((resolve, reject)=> {
        fs.stat(filePath, function(err, data) {
            if(err) {
                reject(err);
                return;
            }

            resolve(data);
        });
    });
}
