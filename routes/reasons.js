const express = require("express");
const router = express.Router();

const reasons = require('../data/reasons');

router.get("/", (req, res) => {
    res.send({ success: true, reasons });
});

module.exports = router;