const express = require("express");
const router = express.Router();

const paymentModeController = require('../controllers/paymentMode');

router.get("/", (req, res) => {
    const paymentModes = paymentModeController.getPaymentModes();
    res.send({ success: true, paymentModes });
});

router.get("/debit/:userId/names", (req, res) => {
    const userId = req.params.userId;
    const debitPaymentModesNames = paymentModeController.getDebitPaymentModesNamesByUser(userId);
    res.send({ success: true, userId, debitPaymentModesNames });
});

router.get("/credit/:userId", (req, res) => {
    const userId = req.params.userId;
    const creditPaymentModes = paymentModeController.getCreditPaymentModesByUser(userId);
    res.send({ success: true, creditPaymentModes });
});

router.get("/:userId/names", (req, res) => {
    const userId = req.params.userId;
    const userPaymentModesNames = paymentModeController.getPaymentModesNamesByUser(userId);
    res.send({ success: true, userPaymentModesNames });
});

module.exports = router;