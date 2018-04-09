const {Readable} = require("stream");
const fs = require("fs");

class MyReadable extends Readable {
    constructor(options) {
        super(options);

        this.count = 0;
    }

    _read(size) {
        console.log("_read");

        if(!this.push("a")) {
            return;
        }

        ++this.count;

        if(this.count == 5) {
            this.emit("error", new Error("Ooops"));
        }

        if(this.count == 10) {
            this.push(null);
        }
    }
}

const stream = new MyReadable();

stream.pipe(fs.createWriteStream("1.txt")).on("finish", function() {
    console.log("finish");
});

// stream.on("data", function(buf) {
//     console.log(buf);
// });
//
