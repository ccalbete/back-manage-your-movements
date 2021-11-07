const express = require("express");
const router = express.Router();

const paymentModesLogic = require('./../src/paymentModes');

router.get("/", (req, res) => {
    const paymentModes = paymentModesLogic.getPaymentModes();
    res.send({ success: true, paymentModes });
});

router.get("/debit/:userId", (req, res) => {
    const userId = req.params.userId;
    const debitPaymentModes = paymentModesLogic.getDebitPaymentModesByUser(userId);
    res.send({ success: true, debitPaymentModes });
});

router.get("/credit/:userId", (req, res) => {
    const userId = req.params.userId;
    const creditPaymentModes = paymentModesLogic.getCreditPaymentModesByUser(userId);
    res.send({ success: true, creditPaymentModes });
});

module.exports = router;