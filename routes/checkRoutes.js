const express = require("express");
const controller = require("../controllers/controller");
const checkRouter = express.Router();

checkRouter.get("/get", controller.start);

module.exports = checkRouter;