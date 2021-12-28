const express = require("express");
const router = express.Router();

//database
const db = require("../../data");


const userController = require('../controllers/user');
const generateToken = require('../controllers/token');
const verifyToken = require('../middleware/tokenValidation');

router.get("/", verifyToken, async (req, res, next) => {
    try {
        const users = await userController.getUsers();
        res.send({ users });
    } catch (error) {
        next(error);
    }
});

/*
If username and password exists, the response is http 200 and an identificator token is created
If username or password is incorrect, the api return "Wrong username or password" for more security 
*/
router.post("/login", async (req, res, next) => {
    const { username, password } = req.body;
    try {

        if (username && password) {

            const dbUser = await userController.userExists(username)
            if (dbUser) {
                const validPassword = await userController.isValidPassword(password, dbUser.password);

                if (validPassword) {
                    const generatedToken = generateToken(dbUser);

                    return res.status(200).json({ success: true, userId: dbUser.id, token: generatedToken });
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

/*
    Username is unique
    When the user is created, an id is assigned to him and the password is encrypted
*/
router.post("/register", async (req, res, next) => {
    const { username, password } = req.body;

    try {
        if (username && password) {

            const userExists = await userController.userExists(username);
            if (userExists) return res.status(400).json({ success: false, message: "Username already registered" });

            const encryptedPassword = await userController.encryptPassword(password);

            await userController.createUser(username, encryptedPassword);

            return res.status(201).send();

        } else {
            return res.status(400).json({ success: false, message: "Required data is missing (username, password)" });
        }
    } catch (error) {
        return next(error);
    }
});

module.exports = router;
