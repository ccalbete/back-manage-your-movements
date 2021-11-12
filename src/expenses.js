const categoriesController = require("./categories");
const expenses = require("./../data/expenses");

function saveExpense(userId, year, month, place, category, amount, paymentMode) {
    categoriesController.addToSpent(category, amount);
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