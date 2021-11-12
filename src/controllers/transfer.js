const paymentModeController = require("./paymentMode");
const transfers = require("../../data/transfers");

function getTransfers() {
    return transfers;
}

function getTransfersByUser(userId) {
    const userTransfers = transfers.filter(transfer => transfer.userId == userId);
    return userTransfers;
}

function saveTransfer(userId, date, origin, amount, destination) {
    paymentModeController.subtractToAvailable(userId, origin, amount);
    paymentModeController.AddToAvailable(userId, destination, amount);

    transfers.push(
        {
            userId,
            date,
            origin,
            amount,
            destination,
        }
    )

}

module.exports.saveTransfer = saveTransfer;
module.exports.getTransfers = getTransfers;
module.exports.getTransfersByUser = getTransfersByUser;