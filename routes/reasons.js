const express = require("express");
const router = express.Router();

const reasonsController = require('./../src/reasons');

router.get("/", (req, res) => {
    const reasons = reasonsController.getReasons();
    res.send({ success: true, reasons });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userReasons = reasonsController.getReasonsByUser(userId);
    res.send({ success: true, userReasons });
});

module.exports = router;