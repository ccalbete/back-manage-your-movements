const express = require("express");
const router = express.Router();

const categoriesLogic = require('./../src/categories');

router.get("/", (req, res) => {
    const categories = categoriesLogic.getCategories();
    res.send({ success: true, categories });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userCategories = categoriesLogic.getCategoriesByUser(userId);
    res.send({ success: true, userCategories });
});

module.exports = router;