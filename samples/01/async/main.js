const fs = require("fs");
const async = require("async");

readFileIfExists("1.txt", function (err, data) {
    if(err) {
        console.error(err);
        return;
    }

    console.log(data.toString());
});

function readFileIfExists(filePath, cb) {
    async.seq(
        fs.stat,
        (stat, cb) => stat.isFile() ? fs.readFile(filePath, cb) : cb(new Error("Not a file")),
        )(filePath, cb);
}
