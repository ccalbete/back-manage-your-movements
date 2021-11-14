const paymentModes = require('../../data/paymentModes');

function getPaymentModes() {
    return paymentModes;
}

function getDebitPaymentModesByUser(userId) {
    const userPaymentModes = getPaymentModesByUser(userId);
    const debitPaymentModes = userPaymentModes.filter(paymentMode => paymentMode.isDebit);
    return debitPaymentModes;
}

function getCreditPaymentModesByUser(userId) {
    const userPaymentModes = getPaymentModesByUser(userId);
    const creditPaymentModes = userPaymentModes.filter(paymentMode => !paymentMode.isDebit);
    return creditPaymentModes;
}

function getPaymentModesByUser(userId) {
    return paymentModes.filter(paymentMode => paymentMode.userId == userId);
}

function subtractToAvailable(userId, paymentModeToUpdate, amount) {
    const userPaymentModes = getPaymentModesByUser(userId);
    userPaymentModes.find(paymentMode => paymentMode.name === paymentModeToUpdate).available -= amount;
}

function addToAvailable(userId, paymentModeToUpdate, amount) {
    const userPaymentModes = getPaymentModesByUser(userId);
    const paymentMode = userPaymentModes.find(paymentMode => paymentMode.name === paymentModeToUpdate);
    paymentMode.available += amount;
}

function addToSpent(userId, paymentModeToUpdate, amount) {
    const userPaymentModes = getPaymentModesByUser(userId);
    const paymentMode = userPaymentModes.find(paymentMode => paymentMode.name === paymentModeToUpdate);
    paymentMode.spent += amount;
}

module.exports.getPaymentModes = getPaymentModes;
module.exports.getDebitPaymentModesByUser = getDebitPaymentModesByUser;
module.exports.getCreditPaymentModesByUser = getCreditPaymentModesByUser;
module.exports.subtractToAvailable = subtractToAvailable;
module.exports.addToAvailable = addToAvailable;
module.exports.getPaymentModesByUser = getPaymentModesByUser;
module.exports.addToSpent = addToSpent;