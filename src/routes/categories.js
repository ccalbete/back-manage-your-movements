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

module.exports = router;