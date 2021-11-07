const reasons = require('./../data/reasons');

function getReasons() {
    return reasons;
}

function getReasonsByUser(userId) {
    const userReasons = reasons.filter(reason => reason.userId == userId);
    return userReasons;
}

module.exports.getReasons = getReasons;
module.exports.getReasonsByUser = getReasonsByUser;