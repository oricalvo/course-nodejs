const express = require('express');
const path = require("path");

const app = express();

function before(req, res, next) {
    next('route');
}

app.get("/api/contact/:id", before, function(req, res) {
    res.send("id is " + req.params.id);
});

app.get("/api/contact/:id", function(req, res) {
    res.send("XXX");
});

app.listen(3000, () => console.log('Server is running'));
