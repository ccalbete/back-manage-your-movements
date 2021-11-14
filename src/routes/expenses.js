const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expense");

router.get("/", (req, res) => {
    const expenses = expenseController.getExpenses();
    res.send({ success: true, expenses });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userExpenses = expenseController.getExpensesByUser(userId);
    res.send({ success: true, userExpenses });
});

router.post("/", (req, res) => {
    const userId = req.user.userId;
    const date = req.body.date;
    const place = req.body.place;
    const category = req.body.category;
    const amount = req.body.amount;
    const paymentMode = req.body.paymentMode;

    if (category && amount && paymentMode) {
        expenseController.saveExpense(userId, date, place, category, amount, paymentMode);
        res.send({ success: true });
    } else {
        return res.status(400).json({ success: false, message: "Required data is missing (category, amount, paymentMode)" });
    }
});


module.exports = router;
