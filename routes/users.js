const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require('../data/users');

//starts in 4 because in data/users there are 3 hardcoded users 
let userId = 4;


const { secretToken, verifyToken } = require("../middleware/tokenValidation");

router.get("/", verifyToken, (req, res) => {
    res.send({ success: true, users });
});

router.post("/login", async (req, res, next) => {
    try {

        if (req.body.username && req.body.password) {

            const user = userExists(req.body.username)

            if (user) {
                const validPassword = await bcrypt.compare(req.body.password, user.password);

                if (validPassword) {
                    const generatedToken = jwt.sign(
                        {
                            username: user.username,
                            password: user.password,
                        },
                        secretToken
                    );

                    return res.status(200).json({
                        success: true,
                        username: req.body.username,
                        token: generatedToken,
                    });
                } else {
                    return res.status(400).json({ success: false, message: "Wrong username or password" });
                }
            } else {
                return res.status(400).json({ success: false, message: "Wrong username or password" });
            }
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

router.post("/register", async (req, res, next) => {
    try {
        if (req.body.username && req.body.password) {

            if (userExists(req.body.username)) {
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

function userExists(username) {
    const exists = users.find((user) => {
        return user.username === username;
    });
    return exists;
}


module.exports = router;
