const express = require("express");
const router = express.Router();

const paymentModeController = require('../controllers/paymentMode');

router.get("/", (req, res) => {
    const paymentModes = paymentModeController.getPaymentModes();
    res.send({ success: true, paymentModes });
});


router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userPaymentModes = paymentModeController.getPaymentModesByUser(userId);
    res.send({ success: true, userPaymentModes });
});

router.get("/:userId/debit", (req, res) => {
    const userId = req.params.userId;
    const debitPaymentModes = paymentModeController.getDebitPaymentModesByUser(userId);
    res.send({ success: true, userId, debitPaymentModes });
});

router.get("/:userId/credit", (req, res) => {
    const userId = req.params.userId;
    const creditPaymentModes = paymentModeController.getCreditPaymentModesByUser(userId);
    res.send({ success: true, creditPaymentModes });
});


module.exports = router;