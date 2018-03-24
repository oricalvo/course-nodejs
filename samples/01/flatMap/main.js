const Rx = require("rxjs");
const fs = require("fs");

const stat = Rx.Observable.bindNodeCallback(fs.state);
const readdir = Rx.Observable.bindNodeCallback(fs.readdir);

readdir(__dirname).flatMap(x=>x).switchMap(file=>stat(file)).subscribe(res=> {
    console.log(res);
}, err=> {
    console.error(err);
});
