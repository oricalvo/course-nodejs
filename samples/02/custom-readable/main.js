const {Readable} = require("stream");

class MyStream extends Readable {
    constructor(options) {
        super(options);

        this.push("1");
        this.push("2");
        this.push(null);
        this.push("3");
    }

    _read(size) {
    }
}

const s = new MyStream();

s.on("data", function(x) {
    console.log(x);
});
