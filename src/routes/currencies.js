const express = require("express");
const router = express.Router();
const currencyController = require('../controllers/currency');

router.get("/:userId", async (req, res) => {
    try {
        const userCurrencies = await currencyController.getCurrenciesByUser(req.params.userId);
        res.send({ success: true, userCurrencies });
    } catch (error) {
        return next(error);
    }
});

module.exports = router;