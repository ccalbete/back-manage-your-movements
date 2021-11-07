const places = require('./../data/places');

function getPlaces() {
    return places;
}

function getPlacesByUser(userId) {
    const userPlaces = places.filter(place => place.userId == userId);
    return userPlaces;
}

module.exports.getPlaces = getPlaces;
module.exports.getPlacesByUser = getPlacesByUser;