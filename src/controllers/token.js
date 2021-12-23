
const jwt = require("jsonwebtoken");
const secretToken = require('../../data/sign');

function generateToken(user) {
    const { userId, username, password } = user;
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