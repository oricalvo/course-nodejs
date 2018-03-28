const {Readable, Transform} = require("stream");

class MySource extends Readable {
    constructor() {
        super({
            objectMode: true,
        });

        let num = 0;
        const timer = setInterval(() => {
            if (num == 5) {
                //this.emit("error", new Error("xxx"));
                this.push(null);
                //clearInterval(timer);
                return;
            }

            this.push(num++);
        }, 200);
    }

    _read(size) {
        // for(let i=0; i<10; i++) {
        //     this.push(i);
        //
        //     if(i==5) {
        //         this.emit("error", new Error("XXX"));
        //         this.push(null);
        //         return;
        //     }
        // }
        //
        // this.push(null);
    }
}

class MyTransform extends Transform {
    constructor() {
        super({
            readableObjectMode: true,
            writableObjectMode: true,
        });
    }

    _transform(chunk, encoding, callback) {
        //console.log(chunk);
        callback(null, chunk*2);
    }
}

const s = new MySource();
s.on("error", function (err) {
    console.log(err);
});
s.on("error", function (err) {
    console.log(err);
});

s.pipe(new MyTransform()).on("error", function (err) {
    console.log(err);
}).on("data", function(d) {
    console.log(d);
}).on("end", function() {
    console.log("end");
}).on("finish", function() {
    console.log("finish");
});


// s.on("data", function(num) {
//     console.log(num);
// }).
//
// on("error", function(err) {
//     console.log(err);
// });
//
