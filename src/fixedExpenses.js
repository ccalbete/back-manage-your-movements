const fixedExpenses = require('./../data/fixedExpenses');

function getFixedExpenses() {
    return fixedExpenses;
}

function getFixedExpensesByUser(userId) {
    const userFixedExpenses = fixedExpenses.filter(fixedExpense => fixedExpense.userId == userId);
    return userFixedExpenses;
}

module.exports.getFixedExpenses = getFixedExpenses;
module.exports.getFixedExpensesByUser = getFixedExpensesByUser;