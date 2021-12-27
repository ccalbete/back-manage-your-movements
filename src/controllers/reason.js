const reasons = require('../../data/reasons');

//database
const db = require("../../data");

async function getReasons() {
    try {
        const reasons = await db.query("select * from reasons");
        return reasons.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function getReasonsByUser(userId) {
    try {
        const reasons = await db.query("select * from reasons where user_id='" + userId + "'");
        return reasons.rows;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.getReasons = getReasons;
module.exports.getReasonsByUser = getReasonsByUser;