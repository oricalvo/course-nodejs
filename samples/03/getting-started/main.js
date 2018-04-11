const express = require('express');
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "./public"), {
    index: ["index.html", "about.html"],
    maxAge: 1000 * 60 * 5,
    fallthrough: false,
}));

app.get("*", function(req, res) {
    res.send("Yo yo");
});

app.listen(3000, () => console.log('Server is running'));

