const express = require("express");
const router = express.Router();

const fixedExpenseController = require('../controllers/fixedExpense');

router.get("/", (req, res) => {
    fixedExpenses = fixedExpenseController.getFixedExpenses();
    res.send({ success: true, fixedExpenses });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userFixedExpenses = fixedExpenseController.getFixedExpensesByUser(userId);
    res.send({ success: true, userFixedExpenses });
});

router.get("/:userId/names", (req, res) => {
    const userId = req.params.userId;
    const userFixedExpensesNames = fixedExpenseController.getFixedExpensesNamesByUser(userId);
    res.send({ success: true, userFixedExpenses: userFixedExpensesNames });
});

module.exports = router;