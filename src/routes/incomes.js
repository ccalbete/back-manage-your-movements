const express = require("express");
const router = express.Router();
const incomeController = require('./../controllers/income');


router.get("/", (req, res, next) => {
    try {
        incomeController.getIncomes()
        const incomes = incomeController.getIncomes();
        res.send({ success: true, incomes });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", (req, res, next) => {
    try {
        const userId = req.params.userId;
        const userIncomes = incomeController.getIncomesByUser(userId);
        res.send({ success: true, userIncomes });
    } catch (error) {
        return next(error);
    }
});

router.post("/", (req, res, next) => {
    try {
        const userId = req.user.userId;
        const date = req.body.date;
        const reason = req.body.reason;
        const amount = req.body.amount;
        const paymentMode = req.body.paymentMode;

        if (amount && paymentMode) {
            incomeController.saveIncome(userId, date, reason, amount, paymentMode);
            return res.status(201).send();
        } else {
            return res.status(400).json({ success: false, message: "Required data is missing (amount, paymentMode)" });
        }
    } catch (error) {
        return next(error);
    }
});

module.exports = router;