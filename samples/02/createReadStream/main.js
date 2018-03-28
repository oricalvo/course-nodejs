const fs = require("fs");

const stream = fs.createReadStream("main.js");

setTimeout(function() {
    //
    //  Data is not lost because of this delay
    //
    stream.on("data", function(buf) {
        console.log(buf);
    });
}, 1500);

