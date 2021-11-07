const paymentModes = require('./../data/paymentModes');

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

module.exports.getPaymentModes = getPaymentModes;
module.exports.getDebitPaymentModesByUser = getDebitPaymentModesByUser;
module.exports.getCreditPaymentModesByUser = getCreditPaymentModesByUser;