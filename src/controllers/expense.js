const categoryController = require("./category");
const paymentModeController = require("./paymentMode");
const placeController = require("./place");

//database
const db = require("../../database");

async function getExpenses() {
    try {
        const expenses = await db.query("select * from expenses");
        return expenses.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function getExpensesByUser(userId) {
    try {
        const userExpenses = await db.query("select * from expenses where user_id=" + userId);
        return userExpenses.rows;
    } catch (error) {
        throw new Error(error);
    }
};

async function saveExpense(userId, amount, paymentMode, place, category, date) {
    try {

        const payment_mode_id = await paymentModeController.getPaymentModeId(userId, paymentMode);
        const place_id = await placeController.getPlaceId(userId, place);
        const category_id = await categoryController.getCategoryId(userId, category);

        await db.query("insert into expenses(user_id, amount, payment_mode_id, place_id, category_id, date) values($1, $2, $3, $4, $5, $6)",
            [userId, amount, payment_mode_id, place_id, category_id, date]);

        //if the expense was correctly saved, update available of payment mode
        await categoryController.addToSpent(userId, category, amount);
        await paymentModeController.addToSpent(userId, paymentMode, amount);
        await paymentModeController.subtractToAvailable(userId, paymentMode, amount);
    } catch (error) {
        throw new Error(error)
    }

}

module.exports.saveExpense = saveExpense;
module.exports.getExpensesByUser = getExpensesByUser;
module.exports.getExpenses = getExpenses;