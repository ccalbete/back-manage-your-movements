const express = require("express");
const router = express.Router();
const reasonController = require('../controllers/reason');

router.get("/", async (req, res, next) => {
    try {
        const reasons = await reasonController.getReasons();
        res.send({ success: true, reasons });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", async (req, res, next) => {
    try {
        const userReasons = await reasonController.getReasonsByUser(req.params.userId);
        res.send({ success: true, userReasons: userReasons });
    } catch (error) {
        return next(error);
    }
});

module.exports = router;