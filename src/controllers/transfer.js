const paymentModeController = require("./paymentMode");
const transfers = require("../../data/transfers");

//database
const db = require("../../data");

async function getTransfers() {
    try {
        const transfers = await db.query("select * from transfers");
        return transfers.rows;
    } catch (error) {
        throw new Error(error);
    }
}

function getTransfersByUser(userId) {
    const userTransfers = transfers.filter(transfer => transfer.userId == userId);
    return userTransfers;
}

async function saveTransfer(userId, date, origin, amount, destination) {


    try {
        paymentModeController.subtractToAvailable(userId, origin, amount);
        paymentModeController.addToAvailable(userId, destination, amount);

        await db.query("insert into transfers(user_id, date, origin, amount, destination) values($1, $2, $3, $4, $5)", [userId, date, origin, amount, destination]);

    } catch (error) {
        throw new Error(error)
    }

}

module.exports.saveTransfer = saveTransfer;
module.exports.getTransfers = getTransfers;
module.exports.getTransfersByUser = getTransfersByUser;