const jwt = require("jsonwebtoken");
const secretToken = require('./../../data/sign');

const verifyToken = (req, res, next) => {
    try {
        const token = req.header("auth-token");

        if (!token) return res.status(403).json({ error: "Access denied" });

        const verified = jwt.verify(token, secretToken);

        req.user = verified;
        next();
    } catch (error) {
        return next(error);
    }
};

module.exports = verifyToken;
