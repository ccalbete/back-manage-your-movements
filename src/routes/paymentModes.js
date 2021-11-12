const express = require("express");
const router = express.Router();

const paymentModeController = require('../controllers/paymentMode');

router.get("/", (req, res) => {
    const paymentModes = paymentModeController.getPaymentModes();
    res.send({ success: true, paymentModes });
});

router.get("/debit/:userId", (req, res) => {
    const userId = req.params.userId;
    const debitPaymentModes = paymentModeController.getDebitPaymentModesByUser(userId);
    res.send({ success: true, debitPaymentModes });
});

router.get("/credit/:userId", (req, res) => {
    const userId = req.params.userId;
    const creditPaymentModes = paymentModeController.getCreditPaymentModesByUser(userId);
    res.send({ success: true, creditPaymentModes });
});

module.exports = router;