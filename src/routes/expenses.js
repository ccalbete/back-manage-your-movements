const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expense");

router.get("/", (req, res, next) => {
    try {
        const expenses = expenseController.getExpenses();
        res.send({ success: true, expenses });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", (req, res, next) => {
    try {
        const userExpenses = expenseController.getExpensesByUser(req.params.userId);
        res.send({ success: true, userExpenses });
    } catch (error) {
        return next(error);
    }
});

router.post("/", (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { date, place, category, amount, paymentMode } = req.body;

        if (category && amount && paymentMode) {
            expenseController.saveExpense(userId, date, place, category, amount, paymentMode);
            return res.status(201).send();
        } else {
            return res.status(400).json({ success: false, message: "Required data is missing (category, amount, paymentMode)" });
        }
    } catch (error) {
        return next(error);
    }
});


module.exports = router;
