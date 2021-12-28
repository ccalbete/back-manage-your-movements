//database
const db = require("../../data");

async function getPaymentModes() {
    try {
        const paymentModes = await db.query("select * from payment_modes");
        return paymentModes.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function getPaymentModesByUser(userId) {
    try {
        const userPaymentModes = await db.query("select * from payment_modes where user_id=" + userId);
        return userPaymentModes.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function getDebitPaymentModesByUser(userId) {
    try {
        const debitPaymentModes = await db.query("select * from payment_modes where user_id=" + userId + " and is_debit=true");
        return debitPaymentModes.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function getCreditPaymentModesByUser(userId) {
    try {
        const creditPaymentModes = await db.query("select * from payment_modes where user_id=" + userId + " and is_debit=false");
        return creditPaymentModes.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function subtractToAvailable(userId, paymentModeToUpdate, amount) {
    try {
        const currentAvailable = await db.query("select available from payment_modes where user_id=" + userId + " and name= '" + paymentModeToUpdate + "'")
        const newAvailable = currentAvailable.rows[0].available - amount;
        await db.query("update payment_modes set available=" + newAvailable + " where user_id=" + userId + " and name= '" + paymentModeToUpdate + "'")
    } catch (error) {
        throw new Error(error);
    }
}

async function addToAvailable(userId, paymentModeToUpdate, amount) {
    try {
        const currentAvailable = await db.query("select available from payment_modes where user_id=" + userId + " and name= '" + paymentModeToUpdate + "'")
        const newAvailable = currentAvailable.rows[0].available + amount;
        await db.query("update payment_modes set available=" + newAvailable + " where user_id=" + userId + " and name= '" + paymentModeToUpdate + "'")
    } catch (error) {
        throw new Error(error);
    }
}

async function addToSpent(userId, paymentModeToUpdate, amount) {
    try {
        const currentSpent = await db.query("select spent from payment_modes where user_id=" + userId + " and name= '" + paymentModeToUpdate + "'")
        const newSpent = currentSpent.rows[0].spent + amount;
        await db.query("update payment_modes set spent=" + newSpent + " where user_id=" + userId + " and name= '" + paymentModeToUpdate + "'")
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.getPaymentModes = getPaymentModes;
module.exports.getDebitPaymentModesByUser = getDebitPaymentModesByUser;
module.exports.getCreditPaymentModesByUser = getCreditPaymentModesByUser;
module.exports.subtractToAvailable = subtractToAvailable;
module.exports.addToAvailable = addToAvailable;
module.exports.getPaymentModesByUser = getPaymentModesByUser;
module.exports.addToSpent = addToSpent;