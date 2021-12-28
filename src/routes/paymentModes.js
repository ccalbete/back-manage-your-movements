const express = require("express");
const router = express.Router();
const paymentModeController = require('../controllers/paymentMode');

router.get("/", async (req, res, next) => {
    try {
        const paymentModes = await paymentModeController.getPaymentModes();
        res.send({ success: true, paymentModes });
    } catch (error) {
        return next(error);
    }
});


router.get("/:userId", async (req, res, next) => {
    try {
        const userPaymentModes = await paymentModeController.getPaymentModesByUser(req.params.userId);
        res.send({ success: true, userPaymentModes });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId/debit", async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const debitPaymentModes = await paymentModeController.getDebitPaymentModesByUser(userId);
        res.send({ success: true, userId, debitPaymentModes });
    } catch (error) {
        return next(error);
    }

});

router.get("/:userId/credit", async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const creditPaymentModes = await paymentModeController.getCreditPaymentModesByUser(userId);
        res.send({ success: true, userId, creditPaymentModes });
    } catch (error) {
        return next(error);
    }
});



module.exports = router;