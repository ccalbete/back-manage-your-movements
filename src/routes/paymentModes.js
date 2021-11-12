const express = require("express");
const router = express.Router();

const paymentModesController = require('../controllers/paymentMode');

router.get("/", (req, res) => {
    const paymentModes = paymentModesController.getPaymentModes();
    res.send({ success: true, paymentModes });
});

router.get("/debit/:userId", (req, res) => {
    const userId = req.params.userId;
    const debitPaymentModes = paymentModesController.getDebitPaymentModesByUser(userId);
    res.send({ success: true, debitPaymentModes });
});

router.get("/credit/:userId", (req, res) => {
    const userId = req.params.userId;
    const creditPaymentModes = paymentModesController.getCreditPaymentModesByUser(userId);
    res.send({ success: true, creditPaymentModes });
});

module.exports = router;