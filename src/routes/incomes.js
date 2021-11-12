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

module.exports = router;