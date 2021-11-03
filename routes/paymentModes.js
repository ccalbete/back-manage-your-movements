const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ success: true, paymentModes });
});


const paymentModes = [
    {
        userId: 1,
        name: "Cash",
        available: 300,
        isDebit: true,
    },
    {
        userId: 1,
        name: "Scotiabank credit card",
        isDebit: false,
    },
    {
        userId: 2,
        name: "Brou debit card",
        available: 800,
        isDebit: true,
    }
];

module.exports = router;