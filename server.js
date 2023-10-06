const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./config/connection.js");
const dotenve = require("dotenv");
const userRoutes = require("./routes/user.js");
const app = express();
dotenve.config();

let PORT = 8080;
app.use(bodyParser.json());
app.use(express.static("Public"));
app.use("/user", userRoutes); //to create a user we will go to /user/createuser
app.listen(PORT, "localhost", () => {
  console.log(`Server started at http:localhost/${PORT}`);
});
