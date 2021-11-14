const incomes = require("../../data/incomes");
const paymentModeController = require("./paymentMode");

function getIncomes() {
    return incomes;
}

function getIncomesByUser(userId) {
    const userIncomes = incomes.filter(income => income.userId == userId);
    return userIncomes;
}

function saveIncome(userId, date, reason, amount, paymentMode) {
    // Find selected user payment mode and add entered amount 
    paymentModeController.AddToAvailable(userId, paymentMode, amount);

    incomes.push(
        {
            userId,
            date,
            reason,
            amount,
            paymentMode
        }
    );
}

module.exports.getIncomes = getIncomes;
module.exports.getIncomesByUser = getIncomesByUser;
module.exports.saveIncome = saveIncome;