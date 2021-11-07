

const express = require("express");
const app = express();

const jwt = require("./tokenValidation");
const categoriesRoutes = require("../routes/categories");
const paymentModesRoutes = require("../routes/paymentModes");
const placesRoutes = require("../routes/places");
const reasonsRoutes = require("../routes/reasons");


app.use("/categories", jwt.verifyToken, categoriesRoutes);
app.use("/paymentModes", jwt.verifyToken, paymentModesRoutes);
app.use("/places", jwt.verifyToken, placesRoutes);
app.use("/reasons", jwt.verifyToken, reasonsRoutes);

module.exports = app;