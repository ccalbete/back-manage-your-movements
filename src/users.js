const users = require('../data/users');
const bcrypt = require("bcrypt");

function userExists(username) {
    const exists = users.find((user) => {
        return user.username === username;
    });
    return exists;
}

async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    return encryptPassword;
}

async function isValidPassword(receivedPassword, userPassword) {
    const isValid = await bcrypt.compare(receivedPassword, userPassword);
    return isValid;
}

module.exports.userExists = userExists;
module.exports.encryptPassword = encryptPassword;
module.exports.isValidPassword = isValidPassword;