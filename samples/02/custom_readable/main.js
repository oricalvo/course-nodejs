const {Readable} = require("stream");
const readline = require('readline');
const fs = require('fs');
const {promisify} = require("es6-promisify");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const path = require("path");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

class MyReadable extends Readable {
    constructor() {
        super({
            objectMode: true
        });

        this.root = "f://";
        this.items = null;
        this.index = 0;
    }

    async _read(size) {
        if(!this.items) {
            this.items = await readdir(this.root);
        }

        this.more();
    }

    async more() {
        while(true) {
            if(this.index == this.items.length) {
                this.push(null);
                return;
            }

            const item = this.items[this.index++];

            try {
                const info = await stat(path.join(this.root, item));
                if (info.isFile()) {
                    if(!this.push(item)) {
                        return;
                    }
                }
                else if(info.isDirectory()) {
                }
            }
            catch(err) {
            }
        }
    }
}

const r = new MyReadable();

// console.log(r.readableBuffer.length);

// rl.question('What do you think of Node.js? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
// });

r.on("data", function(chunk) {
    console.log(chunk);
});

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

