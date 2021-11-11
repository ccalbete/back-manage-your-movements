const paymentModesController = require("./../src/paymentModes");
const transfers = require("./../data/transfers");

function saveTransfer(userId, date, origin, amount, destination) {
    paymentModesController.subtractToAvailable(origin, amount);
    paymentModesController.AddToAvailable(destination, amount);

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