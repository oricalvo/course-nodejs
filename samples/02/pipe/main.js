const fs = require("fs");

const stream = fs.createReadStream("main.js");

fs.close();

stream.pipe(fs.createWriteStream("main.js.backup"));
