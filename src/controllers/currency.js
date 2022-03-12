//database
const db = require("../../database");

async function getCurrenciesByUser(userId) {
    try {
        const userCurrencies = await db.query("select * from currencies where user_id=" + userId);
        return userCurrencies.rows;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.getCurrenciesByUser = getCurrenciesByUser;