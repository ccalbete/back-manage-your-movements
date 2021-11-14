const places = require('../../data/places');

function getPlaces() {
    return places;
}

function getPlacesByUser(userId) {
    const userPlaces = places.filter(place => place.userId == userId).map(place => place.name);
    return userPlaces;
}

module.exports.getPlaces = getPlaces;
module.exports.getPlacesByUser = getPlacesByUser;