const reasons = require('./../data/reasons');

function getReasonsByUser(userId) {
    const userReasons = reasons.filter(reason => reason.userId == userId);
    return userReasons;
}

module.exports.getReasonsByUser = getReasonsByUser;