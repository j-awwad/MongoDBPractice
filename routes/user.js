const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// creating router for user controller

router.post("/createuser", userController.createdata);
router.get("/getAllData", userController.getAlldata);

router.get("/getDataByid/:id", userController.getById);

router.delete("/deleteDataByid/:id", userController.deleteById);
router.put("/updateDataByid/:id", userController.updateById);

module.exports = router;
