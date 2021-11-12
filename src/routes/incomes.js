const express = require("express");
const router = express.Router();
const incomeController = require('./../controllers/income');


router.get("/", (req, res) => {
    incomeController.getIncomes()
    const incomes = incomeController.getIncomes();
    res.send({ success: true, incomes });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userIncomes = incomeController.getIncomes(userId);
    res.send({ success: true, userIncomes });
});

router.post("/", (req, res) => {
    const userId = req.body.userId;
    const year = req.body.year;
    const month = req.body.month;
    const reason = req.body.reason;
    const amount = req.body.amount;
    const paymentMode = req.body.paymentMode;

    if (userId && amount && paymentMode) {
        incomeController.saveIncome(userId, year, month, reason, amount, paymentMode);
        res.send({ success: true });
    } else {
        return res.status(400).json({ success: false, message: "Required data is missing (userId, amount, paymentMode)" });
    }

});

module.exports = router;