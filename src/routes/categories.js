const express = require("express");
const router = express.Router();
const categoryController = require('../controllers/category');

router.get("/", async (req, res, next) => {
    try {
        const categories = await categoryController.getCategories();
        res.send({ success: true, categories });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", async (req, res) => {
    try {
        const userCategories = await categoryController.getCategoriesByUser(req.params.userId);
        res.send({ success: true, userCategories });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId/fixedExpenses", async (req, res, next) => {
    try {
        const userFixedExpensesCategories = await categoryController.getFixedExpensesCategoriesByUser(req.params.userId);
        res.send({ success: true, userFixedExpensesCategories });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId/notFixedExpenses", async (req, res, next) => {
    try {
        const userNotFixedExpensesCategories = await categoryController.getNotFixedExpensesCategoriesByUser(req.params.userId);
        res.send({ success: true, userNotFixedExpensesCategories });
    } catch (error) {
        return next(error);
    }
});


module.exports = router;