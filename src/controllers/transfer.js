const paymentModeController = require("./paymentMode");

//database
const db = require("../../database");

async function getTransfers() {
    try {
        const transfers = await db.query("select * from transfers");
        return transfers.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function getTransfersByUser(userId) {
    try {
        const transfers = await db.query("select * from transfers where user_id=" + userId);
        return transfers.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function saveTransfer(userId, date, origin, amount, destination) {
    try {
        await paymentModeController.subtractToAvailable(userId, origin, amount);
        await paymentModeController.addToAvailable(userId, destination, amount);

        await db.query("insert into transfers(user_id, date, origin_payment_mode_id, amount, destination_payment_mode_id) values($1, $2, $3, $4, $5)",
            [userId, date, origin, amount, destination]);
    } catch (error) {
        throw new Error(error)
    }

}

module.exports.saveTransfer = saveTransfer;
module.exports.getTransfers = getTransfers;
module.exports.getTransfersByUser = getTransfersByUser;