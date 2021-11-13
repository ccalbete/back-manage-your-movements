const jwt = require("jsonwebtoken");
const secretToken = require('./../../data/sign');

const verifyToken = (req, res, next) => {
    try {
        const token = req.header("auth-token");

        if (!token) return res.status(403).json({ error: "Access denied" });

        const verifiedToken = jwt.verify(token, secretToken);

        req.user = verifiedToken;
        next();
    } catch (error) {
        return next(error);
    }
};

module.exports = verifyToken;
