const users = require('../../data/users');
const bcrypt = require("bcrypt");

//database
require("dotenv").config();
const { Client } = require("pg");
const db = require("../../data");



async function userExists(username) {
    try {
        const client = new Client();
        client.connect();

        const users = await db.query("select * from users where username= $1", [username]);

        client.end();

        return users.rows[0];
    } catch (error) {
        console.log(error);
    }
}

async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    return encryptedPassword;
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

module.exports.userExists = userExists;
module.exports.encryptPassword = encryptPassword;
module.exports.isValidPassword = isValidPassword;
module.exports.createUser = createUser;