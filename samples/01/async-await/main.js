const fs = require("fs");

const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

main();

async function main() {
    try {
        const data = await readFileIfExists("1.txt");
        console.log(data.toString());
    }
    catch(err) {
        console.error(err);
    }
}

async function readFileIfExists(filePath) {
    const info = await stat(filePath);
    if(!info.isFile()) {
        throw new Error("Not a file");
    }

    return await readFile(filePath);
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

const obj = {
    id: 123,
    oldStyle: function(callback) {
        callback(null, this.id);
    }
};

const newStyle = promisify(obj.oldStyle.bind(obj));
