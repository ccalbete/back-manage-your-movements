const express = require("express");
const router = express.Router();

const transfersController = require('../controllers/transfer');

router.get("/", (req, res) => {
    const transfers = transfersController.getTransfers();
    res.send({ success: true, transfers });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userTransfers = transfersController.getTransfersByUser(userId);
    res.send({ success: true, userTransfers });
});

router.post("/", (req, res) => {
    const userId = req.body.userId;
    const date = req.body.date;
    const origin = req.body.origin;
    const amount = req.body.amount;
    const destination = req.body.destination;

    if (userId && date && origin && amount && destination) {
        transfersController.saveTransfer(userId, date, origin, amount, destination);
        res.send({ success: true });
    } else {
        return res.status(400).json({ success: false, message: "Required data is missing (userId, date, origin, amount, destination)" });
    }

});

module.exports = router;