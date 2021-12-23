const express = require("express");
const router = express.Router();
const incomeController = require('./../controllers/income');


router.get("/", (req, res, next) => {
    try {
        const incomes = incomeController.getIncomes();
        res.send({ success: true, incomes });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", (req, res, next) => {
    try {
        const userIncomes = incomeController.getIncomesByUser(req.params.userId);
        res.send({ success: true, userIncomes });
    } catch (error) {
        return next(error);
    }
});

router.post("/", (req, res, next) => {
    try {
        const { amount, paymentMode, date, reason } = req.body;
        if (amount && paymentMode) {
            incomeController.saveIncome(req.user.userId, date, reason, amount, paymentMode);
            return res.status(201).send();
        } else {
            return res.status(400).json({ success: false, message: "Required data is missing (amount, paymentMode)" });
        }
    } catch (error) {
        return next(error);
    }
});

module.exports = router;