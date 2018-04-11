const express = require('express');
const path = require("path");
const { performance } = require('perf_hooks');

let nextRequestId = 0;
const app = express();

app.use(function(req, res, next) {
    res.locals.requestId = ++nextRequestId;
    next();
});

app.use(function(req, res, next) {
    const before = performance.now();
    console.log(`BEGIN(${res.locals.requestId}) ${req.method} ${req.url}`);
    next();

    res.on("finish", function() {
        const after = performance.now();
        console.log(`END(${res.locals.requestId}) ${req.method} ${req.url}`);
    });
});

app.get("/api/contact", function(req, res) {
    setTimeout(function() {
        res.send([]);
    }, 10000);
});

app.listen(3000, () => console.log('Server is running'));
