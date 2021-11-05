

const express = require("express");
const app = express();

const categoriesRoutes = require("../routes/categories");
const paymentModesRoutes = require("../routes/paymentModes");
const placesRoutes = require("../routes/places");
const reasonsRoutes = require("../routes/reasons");


app.use("/categories", categoriesRoutes);
app.use("/paymentModes", paymentModesRoutes);
app.use("/places", placesRoutes);
app.use("/reasons", reasonsRoutes);

module.exports = app;