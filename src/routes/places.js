const express = require("express");
const router = express.Router();

const placesController = require('../controllers/place');

router.get("/", (req, res) => {
    const places = placesController.getPlaces();
    res.send({ success: true, places });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userPlaces = placesController.getPlacesByUser(userId);
    res.send({ success: true, userPlaces });
});

module.exports = router;