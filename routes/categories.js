const express = require("express");
const router = express.Router();

const categories = require('../data/categories');

router.get("/", (req, res) => {
    res.send({ success: true, categories });
});


module.exports = router;