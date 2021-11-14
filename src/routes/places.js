const express = require("express");
const router = express.Router();

const placeController = require('../controllers/place');

router.get("/", (req, res) => {
    const places = placeController.getPlaces();
    res.send({ success: true, places });
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userPlaces = placeController.getPlacesByUser(userId);
    res.send({ success: true, userPlaces: userPlaces });
});

module.exports = router;