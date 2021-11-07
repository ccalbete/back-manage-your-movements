const express = require("express");
const router = express.Router();

const categories = require('../data/categories');
const categoriesLogic = require('./../src/categories');

router.get("/", (req, res) => {
    res.send({ success: true, categories });
});

router.get("/fixed/:userId", (req, res) => {
    const userId = req.params.userId;
    const fixedCategories = categoriesLogic.getFixedCategoriesByUser(userId);
    res.send({ success: true, fixedCategories });
});

module.exports = router;