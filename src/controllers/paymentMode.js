const paymentModes = require('../../data/paymentModes');

function getPaymentModes() {
    return paymentModes;
}

function getDebitPaymentModesByUser(userId) {
    const userPaymentModes = getPaymentModesByUser(userId);
    const debitPaymentModes = userPaymentModes.filter(paymentMode => paymentMode.isDebit).map(paymentMode => paymentMode.name);
    return debitPaymentModes;
}


function getCreditPaymentModesByUser(userId) {
    const userPaymentModes = getPaymentModesByUser(userId);
    const creditPaymentModes = userPaymentModes.filter(paymentMode => !paymentMode.isDebit);
    return creditPaymentModes;
}

function getPaymentModesByUser(userId) {
    return paymentModes.filter(paymentMode => paymentMode.userId == userId).map(paymentMode => paymentMode.name);
}

function subtractToAvailable(userId, paymentModeToUpdate, amount) {
    const userPaymentModes = getPaymentModesByUser(userId);
    userPaymentModes.find(paymentMode => paymentMode.name === paymentModeToUpdate).available -= amount;
}

function AddToAvailable(userId, paymentModeToUpdate, amount) {
    const userPaymentModes = getPaymentModesByUser(userId);
    userPaymentModes.find(paymentMode => paymentMode.name === paymentModeToUpdate).available += amount;
}

module.exports.getPaymentModes = getPaymentModes;
module.exports.getDebitPaymentModesByUser = getDebitPaymentModesByUser;
module.exports.getCreditPaymentModesByUser = getCreditPaymentModesByUser;
module.exports.subtractToAvailable = subtractToAvailable;
module.exports.AddToAvailable = AddToAvailable;
module.exports.getPaymentModesByUser = getPaymentModesByUser;