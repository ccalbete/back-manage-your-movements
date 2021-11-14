const users = require('../../data/users');
const bcrypt = require("bcrypt");

//starts in 4 because in data/users there are 3 hardcoded users 
let userId = 4;

function getUsers() {
    return users;
}

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

function createUser(username, encryptedPassword) {
    users.push(
        {
            userId: (userId++).toString(),
            username,
            password: encryptedPassword
        }
    );
}

module.exports.getUsers = getUsers;
module.exports.userExists = userExists;
module.exports.encryptPassword = encryptPassword;
module.exports.isValidPassword = isValidPassword;
module.exports.createUser = createUser;