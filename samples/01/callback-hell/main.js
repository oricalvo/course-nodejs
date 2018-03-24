const fs = require("fs");

readFileIfExists("1.txt", function(err, data) {
    console.log(data);
});

function readFileIfExists(filePath, callback) {
    fs.stat(filePath, function (err, stat) {
        if (err) {
            callback(err);
            return;
        }

        if (stat.isFile()) {
            fs.readFile(filePath, function (err, data) {
                if (err) {
                    callback(err);
                    return;
                }

                callback(null, data.toString());
            });
        }
    });
}
