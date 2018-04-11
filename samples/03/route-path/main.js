const express = require('express');
const path = require("path");

const app = express();

app.get("/abc*", function(req, res) {
    res.send("Yo yo");
});

app.get("/x$", function(req, res) {
    res.send("*x");
});

// app.get("/api/contact/:id(\\d+)", function(req, res) {
//     res.send("id is " + req.params.id);
// });

app.get("/api/contact/ab(c|d)/*", function(req, res) {
    res.json(req.params);
});

app.listen(3000, () => console.log('Server is running'));
