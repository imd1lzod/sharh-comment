import { Router } from "express"
import userController from "./user.controller.js"

const userRouter = Router()

// console.log(userController.getAllUsers());


userRouter
    .get("/", userController.getAllUsers)
    .post("/register", userController.register)
    .post("/login", userController.login)
    .get("/:id", userController.getProfile)
    .put("/:id", userController.updateProfile)

export default userRouter;