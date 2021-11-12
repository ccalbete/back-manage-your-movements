const express = require("express");
const router = express.Router();

const reasonController = require('../controllers/reason');

router.get("/", (req, res) => {
    const reasons = reasonController.getReasons();
    res.send({ success: true, reasons });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userReasons = reasonController.getReasonsByUser(userId);
    res.send({ success: true, userReasons });
});

module.exports = router;