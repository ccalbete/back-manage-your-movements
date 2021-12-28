const bcrypt = require("bcrypt");

//database
const db = require("../../data");

async function getUsers() {
    try {
        const users = await db.query("select * from users");
        return users.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function userExists(username) {
    try {
        const users = await db.query("select * from users where username= $1", [username]);
        return users.rows[0];
    } catch (error) {
        throw new Error(error);
    }
}

async function encryptPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);
        return encryptedPassword;
    } catch (error) {
        throw new Error(error);
    }
}

async function isValidPassword(receivedPassword, userPassword) {
    try {
        const isValid = await bcrypt.compare(receivedPassword, userPassword);
        return isValid;
    } catch (error) {
        throw new Error(error);
    }
}

async function createUser(username, encryptedPassword) {
    try {
        await db.query("insert into users(username, password) values($1, $2)", [username, encryptedPassword]);

    } catch (error) {
        throw new Error(error)
    }
}

module.exports.getUsers = getUsers;
module.exports.userExists = userExists;
module.exports.encryptPassword = encryptPassword;
module.exports.isValidPassword = isValidPassword;
module.exports.createUser = createUser;