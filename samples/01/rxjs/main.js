const Rx = require("rxjs");
const fs = require("fs");

const stat = Rx.Observable.bindNodeCallback(fs.stat);
const readFile = Rx.Observable.bindNodeCallback(fs.readFile);

const filePath = "1.txt";
const source = stat(filePath).switchMap(stat => {
    if (!stat.isFile()) {
        throw new Error("Not a file");
    }

    return readFile(filePath);
});

source.subscribe(res => {
    console.log(res.toString());
}, err => {
    console.error(err);
});
