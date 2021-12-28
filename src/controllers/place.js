//database
const db = require("../../data");

async function getPlaces() {
    try {
        const places = await db.query("select * from places");
        return places.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function getPlacesByUser(userId) {
    try {
        const userPlaces = await db.query("select * from places where user_id='" + userId + "'");
        return userPlaces.rows;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.getPlaces = getPlaces;
module.exports.getPlacesByUser = getPlacesByUser;