const express = require("express");
const router = express.Router();

const userController = require('../controllers/user');
const generateToken = require('../controllers/token');
const verifyToken = require('../middleware/tokenValidation');

router.get("/", verifyToken, (req, res) => {
    const users = userController.getUsers();
    res.send({ success: true, users });
});

/*
If username and password exists, the response is http 200 and an identificator token is created
If username or password is incorrect, the api return "Wrong username or password" for more security 
*/
router.post("/login", async (req, res, next) => {
    try {

        if (req.body.username && req.body.password) {

            const user = userController.userExists(req.body.username)

            if (user) {
                const validPassword = await userController.isValidPassword(req.body.password, user.password);

                if (validPassword) {
                    const generatedToken = generateToken(user.userId, user.username, user.password);

                    return res.status(200).json({ success: true, userId: user.userId, token: generatedToken });
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
    Username must be unique
    When the user is created, an id is assigned to him and the password is encrypted
*/
router.post("/register", async (req, res, next) => {
    try {
        if (req.body.username && req.body.password) {

            if (userController.userExists(req.body.username)) return res.status(400).json({ success: false, message: "Username already registered" });

            const encryptedPassword = await userController.encryptPassword(req.body.password);

            userController.createUser(req.body.username, encryptedPassword);

            return res.status(201).send();

        } else {
            return res.status(400).json({ success: false, message: "Required data is missing (username, password)" });
        }
    } catch (error) {
        return next(error);
    }
});

module.exports = router;
