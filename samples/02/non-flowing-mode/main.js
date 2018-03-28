const fs = require("fs");

const stream = fs.createReadStream("main.js");

stream
    .on("data", function(buf) {
        console.log("data", buf);
    })
    .on("end", function(buf) {
        console.log("end");
    });
