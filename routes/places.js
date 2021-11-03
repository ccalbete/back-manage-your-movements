const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send({ success: true, places });
});


const places = [
    {
        userId: 1,
        name: "Supermarket Frog",
    },
    {
        userId: 1,
        name: "Supermarket Disco",
    },
    {
        userId: 2,
        name: "Pharmacy",
    }
];

module.exports = router;