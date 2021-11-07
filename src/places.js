const places = require('./../data/places');

function getPlacesByUser(userId) {
    const userPlaces = places.filter(place => place.userId == userId);
    return userPlaces;
}

module.exports.getPlacesByUser = getPlacesByUser;