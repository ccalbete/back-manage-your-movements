const categoryController = require("./category");
const paymentModeController = require("./paymentMode");
const expenses = require("../../data/expenses");
const paymentModes = require("../../data/paymentModes");


function getExpenses() {
    return expenses;
}

function getExpensesByUser(userId) {
    const userExpenses = expenses.filter(expense => expense.userId == userId);
    return userExpenses;
};

function saveExpense(userId, date, place, category, amount, paymentMode) {
    categoryController.addToSpent(userId, category, amount);
    paymentModeController.addToSpent(userId, paymentMode, amount);
    paymentModeController.subtractToAvailable(userId, paymentMode, amount);

    expenses.push(
        {
            userId,
            date,
            place,
            category,
            amount,
            paymentMode
        }
    );

}

module.exports.saveExpense = saveExpense;
module.exports.getExpensesByUser = getExpensesByUser;
module.exports.getExpenses = getExpenses;