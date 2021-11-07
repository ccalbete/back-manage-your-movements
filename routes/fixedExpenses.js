const express = require("express");
const router = express.Router();

const fixedExpensesLogic = require('./../src/fixedExpenses');

router.get("/", (req, res) => {
    fixedExpenses = fixedExpensesLogic.getFixedExpenses();
    res.send({ success: true, fixedExpenses });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userFixedExpenses = fixedExpensesLogic.getFixedExpensesByUser(userId);
    res.send({ success: true, userFixedExpenses });
});

module.exports = router;