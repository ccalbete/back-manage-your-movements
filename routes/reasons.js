const express = require("express");
const router = express.Router();

const reasonsLogic = require('./../src/reasons');

router.get("/", (req, res) => {
    const reasons = reasonsLogic.getReasons();
    res.send({ success: true, reasons });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userReasons = reasonsLogic.getReasonsByUser(userId);
    res.send({ success: true, userReasons });
});

module.exports = router;