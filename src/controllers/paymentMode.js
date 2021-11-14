const paymentModes = require('../../data/paymentModes');

function getPaymentModes() {
    return paymentModes;
}

function getDebitPaymentModesNamesByUser(userId) {
    const userPaymentModes = getPaymentModesByUser(userId);
    const debitPaymentModesNames = userPaymentModes.filter(paymentMode => paymentMode.isDebit).map(paymentMode => paymentMode.name);
    return debitPaymentModesNames;
}


function getCreditPaymentModesByUser(userId) {
    const userPaymentModes = getPaymentModesByUser(userId);
    const creditPaymentModes = userPaymentModes.filter(paymentMode => !paymentMode.isDebit);
    return creditPaymentModes;
}

function getPaymentModesNamesByUser(userId) {
    return paymentModes.filter(paymentMode => paymentMode.userId == userId).map(paymentMode => paymentMode.name);
}


function getPaymentModesByUser(userId) {
    return paymentModes.filter(paymentMode => paymentMode.userId == userId);
}

function subtractToAvailable(userId, paymentModeToUpdate, amount) {
    const userPaymentModes = getPaymentModesNamesByUser(userId);
    userPaymentModes.find(paymentMode => paymentMode.name === paymentModeToUpdate).available -= amount;
}

function AddToAvailable(userId, paymentModeToUpdate, amount) {
    const userPaymentModes = getPaymentModesNamesByUser(userId);
    userPaymentModes.find(paymentMode => paymentMode.name === paymentModeToUpdate).available += amount;
}

module.exports.getPaymentModes = getPaymentModes;
module.exports.getDebitPaymentModesNamesByUser = getDebitPaymentModesNamesByUser;
module.exports.getCreditPaymentModesByUser = getCreditPaymentModesByUser;
module.exports.subtractToAvailable = subtractToAvailable;
module.exports.AddToAvailable = AddToAvailable;
module.exports.getPaymentModesNamesByUser = getPaymentModesNamesByUser;
module.exports.getPaymentModesByUser = getPaymentModesByUser;