const express = require("express");
const router = express.Router();
const expensesController = require("./../src/expenses");

router.post("/", (req, res) => {
    const userId = req.body.userId;
    const year = req.body.year;
    const month = req.body.month;
    const place = req.body.place;
    const category = req.body.category;
    const amount = req.body.amount;
    const paymentMode = req.body.paymentMode;

    if (userId && category && amount && paymentMode) {
        expensesController.saveExpense(userId, year, month, place, category, amount, paymentMode);
        res.send({ success: true });
    } else {
        return res.status(400).json({ success: false, message: "Required data is missing (userId, category, amount, paymentMode)" });
    }
});


module.exports = router;
