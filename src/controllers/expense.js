const categoryController = require("./category");
const expenses = require("../../data/expenses");

function getExpenses() {
    return expenses;
}

function getExpensesByUser(userId) {
    const userExpenses = expenses.filter(expense => expense.userId == userId);
    return userExpenses;
};

function saveExpense(userId, year, month, place, category, amount, paymentMode) {
    categoryController.addToSpent(category, amount);
    //restar al disponible del paymentMode
    expenses.push(
        {
            userId,
            year,
            month,
            place,
            category,
            amount,
            paymentMode
        }
    )

}

module.exports.saveExpense = saveExpense;
module.exports.getExpensesByUser = getExpensesByUser;
module.exports.getExpenses = getExpenses;