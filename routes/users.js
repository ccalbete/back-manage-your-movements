const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const users = require('../data/users');
const usersLogic = require('./../src/users');
const generateToken = require("./../src/token");
const verifyToken = require("../middleware/tokenValidation");

//starts in 4 because in data/users there are 3 hardcoded users 
let userId = 4;



router.get("/", verifyToken, (req, res) => {
    res.send({ success: true, users });
});

router.post("/login", async (req, res, next) => {
    try {

        if (req.body.username && req.body.password) {

            const user = usersLogic.userExists(req.body.username)

            if (user) {
                const validPassword = await usersLogic.isValidPassword(req.body.password, user.password);

                if (validPassword) {
                    const generatedToken = generateToken(user.username, user.password);

                    return res.status(200).json({ success: true, username: req.body.username, token: generatedToken });
                } else {
                    return res.status(400).json({ success: false, message: "Wrong username or password" });
                }
            } else {
                return res.status(400).json({ success: false, message: "Wrong username or password" });
            }
        } else {
            return res.status(400).json({ success: false, message: "Required data is missing (username, password)" });
        }
    } catch (error) {
        return next(error);
    }
});

router.post("/register", async (req, res, next) => {
    try {
        if (req.body.username && req.body.password) {

            if (usersLogic.userExists(req.body.username)) return res.status(400).json({ success: false, message: "Username already registered" });

            const encryptedPassword = await usersLogic.encryptPassword(req.body.password);

            users.push(
                {
                    userId: userId++,
                    username: req.body.username,
                    password: encryptedPassword
                }
            );

            return res.status(201).send();

        } else {
            return res.status(400).json({ success: false, message: "Required data is missing (username, password)" });
        }
    } catch (error) {
        return next(error);
    }
});

module.exports = router;
