const express = require('express');
const path = require("path");

const app = express();

// function before(req, res, next) {
//     next('route');
// }

app.get("/api/contact/:id", function (req, res) {
    res.writeHead(404, {
        "Content-Type": "text/html",
    });
    res.write("a");
    res.write("b");
    res.write("c");
    res.end();
});

app.listen(3000, () => console.log('Server is running'));
