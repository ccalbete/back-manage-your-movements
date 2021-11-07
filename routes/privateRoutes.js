

const express = require("express");
const app = express();
const verifyToken = require("./../middleware/tokenValidation");

const categoriesRoutes = require("./categories");
const paymentModesRoutes = require("./paymentModes");
const placesRoutes = require("./places");
const reasonsRoutes = require("./reasons");


app.use("/categories", verifyToken, categoriesRoutes);
app.use("/paymentModes", verifyToken, paymentModesRoutes);
app.use("/places", verifyToken, placesRoutes);
app.use("/reasons", verifyToken, reasonsRoutes);

module.exports = app;