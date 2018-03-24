const express = require("express");

const app = express();

app.get("/api/contact", function (req, res) {
    res.json([
        {id: 1, name: "Ori"},
        {id: 2, name: "Roni"}
    ]);
});

app.listen(3000, function() {
    console.log("Server is running");
});
