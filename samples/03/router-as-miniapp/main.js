const express = require('express');
const path = require("path");
const profile = require("./profile");

const app = express();

app.get("/api/contact/:id?", function(req, res, next) {
    if(!req.params.id) {
        next();
        return;
    }

    res.send({
        id: req.params.id,
    });
});

app.get("/api/contact", function(req, res) {
    res.send([
    ]);
});

app.use("/profile", profile);

app.listen(3000, () => console.log('Server is running'));
