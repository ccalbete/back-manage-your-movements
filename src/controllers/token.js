
const jwt = require("jsonwebtoken");
const secretToken = require('../../database/sign');

function generateToken(user) {
    const userId = user.id;
    const { username, password } = user;
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