const express = require('express');
const path = require("path");

const app = express();

// function before(req, res, next) {
//     next('route');
// }

app.get("/api/contact/:id", function (req, res) {
    res.send({
        ok: true
    });
});

app.listen(3000, () => console.log('Server is running'));
