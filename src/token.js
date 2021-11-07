
const jwt = require("jsonwebtoken");
const secretToken = require('./../data/sign');

function generateToken(username, password) {
    return jwt.sign(
        {
            username,
            password,
        },
        secretToken
    );
}

module.exports = generateToken;