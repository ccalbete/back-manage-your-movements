const express = require("express");
const router = express.Router();

const transferController = require('../controllers/transfer');

router.get("/", (req, res, next) => {
    try {
        const transfers = transferController.getTransfers();
        res.send({ success: true, transfers });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", (req, res, next) => {
    try {
        const userId = req.params.userId;
        const userTransfers = transferController.getTransfersByUser(userId);
        res.send({ success: true, userTransfers });
    } catch (error) {
        return next(error);
    }
});

router.post("/", (req, res, next) => {
    try {
        const userId = req.user.userId;
        const date = req.body.date;
        const origin = req.body.origin;
        const amount = req.body.amount;
        const destination = req.body.destination;

        if (date && origin && amount && destination) {
            transferController.saveTransfer(userId, date, origin, amount, destination);
            return res.status(201).send();
        } else {
            return res.status(400).json({ success: false, message: "Required data is missing (date, origin, amount, destination)" });
        }
    } catch (error) {
        return next(error);
    }
});

module.exports = router;