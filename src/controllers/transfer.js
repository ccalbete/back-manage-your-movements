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

async function saveTransfer(userId, date, origin, originAmount, destination, destinationAmount) {
    try {

        const origin_currency = await paymentModeController.getCurrency(origin);

        await db.query("insert into transfers(user_id, date, origin_payment_mode_id, origin_currency_id, origin_amount, destination_payment_mode_id, destination_amount) values($1, $2, $3, $4, $5, $6, $7)",
            [userId, date, origin, origin_currency, originAmount, destination, destinationAmount ]);

        await paymentModeController.subtractToAvailable(userId, origin, originAmount);
        if (destinationAmount) { 
            await paymentModeController.addToAvailable(userId, destination, destinationAmount);
        } else {
            await paymentModeController.addToAvailable(userId, destination, originAmount);
        }
        
    } catch (error) {
        throw new Error(error)
    }

}

module.exports.saveTransfer = saveTransfer;
module.exports.getTransfers = getTransfers;
module.exports.getTransfersByUser = getTransfersByUser;