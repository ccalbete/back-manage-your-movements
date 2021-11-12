const express = require("express");
const router = express.Router();

const categoriesController = require('../controllers/category');

router.get("/", (req, res) => {
    const categories = categoriesController.getCategories();
    res.send({ success: true, categories });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userCategories = categoriesController.getCategoriesByUser(userId);
    res.send({ success: true, userCategories });
});

module.exports = router;