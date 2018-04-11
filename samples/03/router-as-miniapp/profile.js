const {Router} = require('express');

const router = Router();

router.get("/details", function(req, res) {
    res.json({
        id:123,
        name: "Ori"
    });
});

router.post("/update", function(req, res) {
    res.json({
        ok: true,
    });
});

module.exports = router;
