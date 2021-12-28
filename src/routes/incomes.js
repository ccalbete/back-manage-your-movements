const express = require("express");
const router = express.Router();
const incomeController = require('./../controllers/income');


router.get("/", async (req, res, next) => {
    try {
        const incomes = await incomeController.getIncomes();
        res.send({ success: true, incomes });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", async (req, res, next) => {
    try {
        const userIncomes = await incomeController.getIncomesByUser(req.params.userId);
        res.send({ success: true, userIncomes });
    } catch (error) {
        return next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const { amount, paymentMode, date, reason } = req.body;
        if (amount && paymentMode) {
            await incomeController.saveIncome(req.user.userId, reason, paymentMode, date, amount);
            return res.status(201).send();
        } else {
            return res.status(400).json({ success: false, message: "Required data is missing (amount, paymentMode)" });
        }
    } catch (error) {
        return next(error);
    }
});

module.exports = router;