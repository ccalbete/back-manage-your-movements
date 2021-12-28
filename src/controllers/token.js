
const jwt = require("jsonwebtoken");

function generateToken(user) {
    const userId = user.id;
    const { username, password } = user;
    const secretToken = process.env.sign;

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