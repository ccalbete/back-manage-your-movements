require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require('./src/routes/users');
const privateRoutes = require("./src/routes/privateRoutes.js");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors());

app.use("/users", userRoutes);
app.use("/", privateRoutes);

app.listen(process.env.SERVERPORT, () => {
    console.log(`Server running, port: ${process.env.SERVERPORT}`);
});
