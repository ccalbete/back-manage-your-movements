const express = require("express");
const router = express.Router();

const placeController = require('../controllers/place');

router.get("/", async (req, res, next) => {
    try {
        const places = await placeController.getPlaces();
        res.send({ success: true, places });
    } catch (error) {
        return next(error);
    }
});

router.get("/:userId", async (req, res) => {
    try {
        const userPlaces = await placeController.getPlacesByUser(req.params.userId);
        res.send({ success: true, userPlaces: userPlaces });
    } catch (error) {
        return next(error);
    }
});

module.exports = router;