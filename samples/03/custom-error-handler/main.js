const express = require('express');
const path = require("path");

const app = express();

app.get("/api/contact", function getAllContacts(req, res) {
    throw new ApplicationError(123, "Oooops");
    res.send([]);
});

app.use(function(err, req, res, next) {
    if(err.errorCode) {
        res.json({
            ok: false,
            errorCode: err.errorCode,
            errorMessage: err.message,
        });
    }
    else {
        next(err);
    }
});

app.listen(3000, () => console.log('Server is running'));

class ApplicationError extends Error {
    constructor(errorCode, message) {
        super(message);

        this.errorCode = errorCode;
    }
}
