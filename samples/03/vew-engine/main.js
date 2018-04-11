const express = require('express');
const path = require("path");

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("*", function(req, res) {
    res.render("index.ejs", {
        id: 1,
        name: "Ori",
    });
});

app.listen(3000, () => console.log('Server is running'));
