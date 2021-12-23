const express = require("express");
const router = express.Router();

const placeController = require('../controllers/place');

router.get("/", (req, res, next) => {
    try {
        const places = placeController.getPlaces();
        res.send({ success: true, places });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", (req, res) => {
    try {
        const userPlaces = placeController.getPlacesByUser(req.params.userId);
        res.send({ success: true, userPlaces: userPlaces });
    } catch (error) {
        return next(error);
    }
});

module.exports = router;