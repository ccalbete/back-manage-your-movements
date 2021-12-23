const express = require("express");
const router = express.Router();

const categoryController = require('../controllers/category');

router.get("/", (req, res, next) => {
    try {
        const categories = categoryController.getCategories();
        res.send({ success: true, categories });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", (req, res) => {
    try {
        const userCategories = categoryController.getCategoriesByUser(req.params.userId);
        res.send({ success: true, userCategories });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId/fixedExpenses", (req, res, next) => {
    try {
        const userFixedExpensesCategories = categoryController.getFixedExpensesCategoriesByUser(req.params.userId);
        res.send({ success: true, userFixedExpensesCategories });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId/notFixedExpenses", (req, res, next) => {
    try {
        const userNotFixedExpensesCategories = categoryController.getNotFixedExpensesCategoriesByUser(req.params.userId);
        res.send({ success: true, userNotFixedExpensesCategories });
    } catch (error) {
        return next(error);
    }
});


module.exports = router;