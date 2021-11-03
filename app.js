require('dotenv').config()
const express = require("express");
const app = express();

const userRoutes = require("./routes/users");
const categoriesRoutes = require("./routes/categories");
const paymentModesRoutes = require("./routes/paymentModes");
const placesRoutes = require("./routes/places");
const reasonsRoutes = require("./routes/reasons");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);
app.use("/paymentModes", paymentModesRoutes);
app.use("/places", placesRoutes);
app.use("/reasons", reasonsRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
