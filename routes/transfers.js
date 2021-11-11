const express = require("express");
const router = express.Router();

const transfersController = require("./../src/transfers");

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