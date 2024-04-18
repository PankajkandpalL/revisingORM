const express = require("express");
const { getAllUsers, createUser, updateAUser, deleteUser } = require("../controllers/user.controller");


const userRouter = express.Router();

userRouter.get("/", getAllUsers);

userRouter.post("/create", createUser);

userRouter.patch("/update/:id", updateAUser);

userRouter.delete("/delete/:id", deleteUser)

module.exports = {
  userRouter,
};
