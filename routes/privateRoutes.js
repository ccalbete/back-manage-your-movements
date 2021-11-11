

const express = require("express");
const app = express();
const verifyToken = require("./../middleware/tokenValidation");

const categoriesRoutes = require("./categories");
const fixedExpensesRoutes = require("./fixedExpenses");
const paymentModesRoutes = require("./paymentModes");
const placesRoutes = require("./places");
const reasonsRoutes = require("./reasons");
const transfersRoutes = require("./transfers");

app.use("/categories", verifyToken, categoriesRoutes);
app.use("/fixedExpenses", verifyToken, fixedExpensesRoutes)
app.use("/paymentModes", verifyToken, paymentModesRoutes);
app.use("/places", verifyToken, placesRoutes);
app.use("/reasons", verifyToken, reasonsRoutes);
app.use("/transfers", verifyToken, transfersRoutes);

module.exports = app;