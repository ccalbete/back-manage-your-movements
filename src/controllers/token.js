
const jwt = require("jsonwebtoken");
const secretToken = require('../../data/sign');

function generateToken(userId, username, password) {
    return jwt.sign(
        {
            userId,
            username,
            password,
        },
        secretToken
    );
}

module.exports = generateToken;