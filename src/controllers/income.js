const incomes = require("../../data/incomes");

function getIncomes() {
    return incomes;
}

function getIncomesByUser(userId) {
    const userIncomes = incomes.filter(income => income.userId == userId);
    return userIncomes;
}

module.exports.getIncomes = getIncomes;
module.exports.getIncomesByUser = getIncomesByUser;