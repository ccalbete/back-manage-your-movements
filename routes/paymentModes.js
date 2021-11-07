const express = require("express");
const router = express.Router();

const paymentModes = require('../data/paymentModes');

router.get("/", (req, res) => {
    res.send({ success: true, paymentModes });
});

module.exports = router;