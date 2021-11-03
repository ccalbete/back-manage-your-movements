const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ success: true, users: users });
});

const users = [
    {
        id: 1,
        username: "a",
        password: "b",
    },
    {
        id: 2,
        username: "juanperez",
        password: "123",
    }
];

module.exports = router;
