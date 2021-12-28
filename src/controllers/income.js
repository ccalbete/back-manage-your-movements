const paymentModeController = require("./paymentMode");
const reasonController = require("./reason");

//database
const db = require("../../data");

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
        const reason_id = await reasonController.getReasonId(userId, reason);
        const payment_mode_id = await paymentModeController.getPaymentModeId(userId, paymentMode);

        await db.query("insert into incomes(user_id, reason_id, payment_mode_id, date, amount) values($1, $2, $3, $4, $5)",
            [userId, reason_id, payment_mode_id, date, amount]);

        //if the income was correctly saved, update available of payment mode
        await paymentModeController.addToAvailable(userId, paymentMode, amount);
    } catch (error) {
        throw new Error(error)
    }
}

module.exports.getIncomes = getIncomes;
module.exports.getIncomesByUser = getIncomesByUser;
module.exports.saveIncome = saveIncome;