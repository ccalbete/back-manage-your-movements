const express = require("express");
const router = express.Router();

const paymentModeController = require('../controllers/paymentMode');

router.get("/", (req, res, next) => {
    try {
        const paymentModes = paymentModeController.getPaymentModes();
        res.send({ success: true, paymentModes });
    } catch (error) {
        return next(error);
    }
});


router.get("/:userId", (req, res, next) => {
    try {
        const userId = req.params.userId;
        const userPaymentModes = paymentModeController.getPaymentModesByUser(userId);
        res.send({ success: true, userPaymentModes });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId/debit", (req, res, next) => {
    try {
        const userId = req.params.userId;
        const debitPaymentModes = paymentModeController.getDebitPaymentModesByUser(userId);
        res.send({ success: true, userId, debitPaymentModes });
    } catch (error) {
        return next(error);
    }

});

router.get("/:userId/credit", (req, res, next) => {
    try {
        const userId = req.params.userId;
        const creditPaymentModes = paymentModeController.getCreditPaymentModesByUser(userId);
        res.send({ success: true, creditPaymentModes });
    } catch (error) {
        return next(error);
    }
});


module.exports = router;