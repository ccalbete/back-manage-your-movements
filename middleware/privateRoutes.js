

const express = require("express");
const app = express();
const verifyToken = require("./tokenValidation");

const categoriesRoutes = require("../routes/categories");
const paymentModesRoutes = require("../routes/paymentModes");
const placesRoutes = require("../routes/places");
const reasonsRoutes = require("../routes/reasons");


app.use("/categories", verifyToken, categoriesRoutes);
app.use("/paymentModes", verifyToken, paymentModesRoutes);
app.use("/places", verifyToken, placesRoutes);
app.use("/reasons", verifyToken, reasonsRoutes);

module.exports = app;