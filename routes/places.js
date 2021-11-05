const express = require("express");
const router = express.Router();


const places = require('../data/places');


router.get("/", (req, res) => {
    res.send({ success: true, places });
});

module.exports = router;