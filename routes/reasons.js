const express = require("express");
const router = express.Router();

const reasons = require('../data/reasons');
const reasonsLogic = require('./../src/reasons');

router.get("/", (req, res) => {
    res.send({ success: true, reasons });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userReasons = reasonsLogic.getReasonsByUser(userId);
    res.send({ success: true, userReasons });
});

module.exports = router;