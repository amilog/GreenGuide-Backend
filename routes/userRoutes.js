const express = require("express");
const controller = require("../controllers/controller");
const userRouter = express.Router();

userRouter.post('/register', controller.createUser);
userRouter.get("/get", controller.getUsers);
userRouter.get("/get/:id", controller.getUserById);

module.exports = userRouter;