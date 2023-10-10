const express = require("express");
const router = express.Router();
const controller = require("../controllers/user1");

router.post("/createData", controller.createData);

router.get("/getByName/:fullName", controller.getDataByFullName);

module.exports = router;
