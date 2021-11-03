const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ success: true, categories });
});


const categories = [
    {
        userId: 1,
        name: "Food",
        isFixed: false,
        spent: 100
    },
    {
        userId: 1,
        name: "Booking",
        isFixed: true,
        spent: 10000
    },
    {
        userId: 2,
        name: "Transportation",
        isFixed: false,
        spent: 500,
    }
];

module.exports = router;