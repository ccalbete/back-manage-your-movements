

const express = require("express");
const app = express();
const verifyToken = require('../middleware/tokenValidation');

const categoriesRoutes = require("./categories");
const paymentModesRoutes = require("./paymentModes");
const placesRoutes = require("./places");
const reasonsRoutes = require("./reasons");
const transfersRoutes = require("./transfers");
const expensesRoutes = require("./expenses");
const incomesRoutes = require("./incomes");

app.use("/categories", verifyToken, categoriesRoutes);
app.use("/paymentModes", verifyToken, paymentModesRoutes);
app.use("/places", verifyToken, placesRoutes);
app.use("/reasons", verifyToken, reasonsRoutes);
app.use("/transfers", verifyToken, transfersRoutes);
app.use("/expenses", verifyToken, expensesRoutes);
app.use("/incomes", verifyToken, incomesRoutes);

module.exports = app;