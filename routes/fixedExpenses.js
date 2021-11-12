const express = require("express");
const router = express.Router();

const fixedExpensesController = require('./../src/fixedExpenses');

router.get("/", (req, res) => {
    fixedExpenses = fixedExpensesController.getFixedExpenses();
    res.send({ success: true, fixedExpenses });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userFixedExpenses = fixedExpensesController.getFixedExpensesByUser(userId);
    res.send({ success: true, userFixedExpenses });
});

module.exports = router;