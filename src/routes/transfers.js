const express = require("express");
const router = express.Router();
const transferController = require('../controllers/transfer');

router.get("/", async (req, res, next) => {
    try {
        const transfers = await transferController.getTransfers();
        res.send({ success: true, transfers });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", async (req, res, next) => {
    try {
        const userTransfers = await transferController.getTransfersByUser(req.params.userId);
        res.send({ success: true, userTransfers });
    } catch (error) {
        return next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { date, origin, amount, destination } = req.body;

        if (date && origin && amount && destination) {
            await transferController.saveTransfer(userId, date, origin, amount, destination);
            return res.status(201).send();
        } else {
            return res.status(400).json({ success: false, message: "Required data is missing (date, origin, amount, destination)" });
        }
    } catch (error) {
        return next(error);
    }
});

module.exports = router;