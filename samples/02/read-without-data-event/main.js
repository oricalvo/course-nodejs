const fs = require("fs");

const stream = fs.createReadStream("main.js");

stream.on("readable", function() {
    console.log("readable");

    let chunk;

    while(chunk = stream.read(1)) {
        console.log("read");

        //process.stdout.write(chunk.toString());
    }
});


