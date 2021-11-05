require('dotenv').config();
const express = require("express");
const app = express();

const userRoutes = require("./routes/users");
const privateApis = require("./middleware/privateApis");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/users", userRoutes);
app.use("/", privateApis);

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
