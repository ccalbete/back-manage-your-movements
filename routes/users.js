const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const users = require('../data/users');

//starts in 4 because in data/users there are 3 hardcoded users 
let userId = 4;

router.get("/", (req, res) => {
    res.send({ success: true, users });
});

router.post("/register", async (req, res, next) => {
    try {
        if (req.body.username && req.body.password) {

            const userExists = users.find((user) => {
                return user.username === req.body.username;
            });

            if (userExists) {
                return res.status(400).json({ success: false, message: "Username already registered" });
            }

            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(req.body.password, salt);

            users.push(
                {
                    userId: userId++,
                    username: req.body.username,
                    password: encryptedPassword
                }
            );

            return res.status(201).send();

        } else {
            return res.status(400).json({
                success: false,
                message: "Required data is missing (username, password)",
            });
        }
    } catch (error) {
        return next(error);
    }
});

module.exports = router;
