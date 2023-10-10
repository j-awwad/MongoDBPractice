const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./config/connection.js");
const dotenve = require("dotenv");
const userRoutes = require("./routes/auth");
const app = express();
dotenve.config();

let PORT = 8080;
app.use(bodyParser.json());
app.use(express.static("Public"));
app.use("/auth", userRoutes); //to create a path, we will go to /path /....
app.listen(PORT, "localhost", () => {
  console.log(`Server started at http:localhost/${PORT}`);
});
