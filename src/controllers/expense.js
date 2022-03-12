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

        await categoryController.addToSpent(userId, category, amount);
        await paymentModeController.addToSpent(userId, paymentMode, amount);

        const is_debit = await db.query("select is_debit from payment_modes where id = $1", [paymentMode]);
        if (is_debit.rows[0].is_debit) {
            await paymentModeController.subtractToAvailable(userId, paymentMode, amount);
        }

        const currency = await paymentModeController.getCurrency(paymentMode);

        await db.query("insert into expenses(user_id, amount, payment_mode_id, place_id, category_id, currency_id, date) values($1, $2, $3, $4, $5, $6, $7)",
            [userId, amount, paymentMode, place, category, currency, date]);
        
    } catch (error) {
        throw new Error(error)
    }

}

module.exports.saveExpense = saveExpense;
module.exports.getExpensesByUser = getExpensesByUser;
module.exports.getExpenses = getExpenses;