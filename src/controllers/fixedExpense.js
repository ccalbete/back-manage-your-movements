const fixedExpenses = require('../../data/fixedExpenses');

function getFixedExpenses() {
    return fixedExpenses;
}

function getFixedExpensesByUser(userId) {
    const userFixedExpenses = fixedExpenses.filter(fixedExpense => fixedExpense.userId == userId);
    return userFixedExpenses;
}

function getFixedExpensesNamesByUser(userId) {
    const userFixedExpensesNames = fixedExpenses.filter(fixedExpense => fixedExpense.userId == userId).map(fixedExpense => fixedExpense.name);
    return userFixedExpensesNames;
}

module.exports.getFixedExpenses = getFixedExpenses;
module.exports.getFixedExpensesByUser = getFixedExpensesByUser;
module.exports.getFixedExpensesNamesByUser = getFixedExpensesNamesByUser;