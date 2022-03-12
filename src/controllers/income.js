const paymentModeController = require("./paymentMode");
const reasonController = require("./reason");

//database
const db = require("../../database");

async function getIncomes() {
    try {
        const incomes = await db.query("select * from incomes");
        return incomes.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function getIncomesByUser(userId) {
    try {
        const userIncomes = await db.query("select * from incomes where user_id=" + userId);
        return userIncomes.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function saveIncome(userId, reason, paymentMode, date, amount) {
    try {
        await paymentModeController.addToAvailable(userId, paymentMode, amount);

        const currency = await paymentModeController.getCurrency(paymentMode);

        await db.query("insert into incomes(user_id, reason_id, payment_mode_id, date, currency_id, amount) values($1, $2, $3, $4, $5, $6)",
            [userId, reason, paymentMode, date, currency, amount]);
    } catch (error) {
        throw new Error(error)
    }
}

module.exports.getIncomes = getIncomes;
module.exports.getIncomesByUser = getIncomesByUser;
module.exports.saveIncome = saveIncome;