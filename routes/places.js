const express = require("express");
const router = express.Router();

const placesLogic = require('./../src/places');

router.get("/", (req, res) => {
    const places = placesLogic.getPlaces();
    res.send({ success: true, places });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userPlaces = placesLogic.getPlacesByUser(userId);
    res.send({ success: true, userPlaces });
});

module.exports = router;