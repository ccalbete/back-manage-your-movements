const express = require("express");
const router = express.Router();

const reasonController = require('../controllers/reason');

router.get("/", (req, res, next) => {
    try {
        const reasons = reasonController.getReasons();
        res.send({ success: true, reasons });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", (req, res, next) => {
    try {
        const userId = req.params.userId;
        const userReasons = reasonController.getReasonsByUser(userId);
        res.send({ success: true, userReasons: userReasons });
    } catch (error) {
        return next(error);
    }
});

module.exports = router;