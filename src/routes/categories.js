const express = require("express");
const router = express.Router();

const categoryController = require('../controllers/category');

router.get("/", (req, res) => {
    const categories = categoryController.getCategories();
    res.send({ success: true, categories });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userCategories = categoryController.getCategoriesByUser(userId);
    res.send({ success: true, userCategories });
});

router.get("/:userId/fixedExpenses", (req, res) => {
    const userId = req.params.userId;
    const userFixedExpensesCategories = categoryController.getFixedExpensesCategoriesByUser(userId);
    res.send({ success: true, userFixedExpensesCategories });
});

router.get("/:userId/notFixedExpenses", (req, res) => {
    const userId = req.params.userId;
    const userNotFixedExpensesCategories = categoryController.getNotFixedExpensesCategoriesByUser(userId);
    res.send({ success: true, userNotFixedExpensesCategories });
});


module.exports = router;