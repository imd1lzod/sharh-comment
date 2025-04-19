import { Router } from "express"
import userController from "./user.controller.js"
import { checkRoles } from "../../middleware/roles.middleware.js";
import { checkToken } from "../../middleware/check-token.middleware.js";

const userRouter = Router()

// console.log(userController.getAllUsers());


userRouter
    .get("/", checkToken(true), checkRoles("admin"), userController.getAllUsers)
    .post("/register", checkToken(false), checkRoles("admin", "user", "business_user"), userController.register)
    .post("/login", checkToken(false), checkRoles("admin", "user", "business_user"), userController.login)
    .get("/:id", checkToken(true), checkRoles("admin", "user", "business_user"), userController.getProfile)
    .put("/:id", checkToken(true), checkRoles("admin", "user", "business_user"), userController.updateProfile)
    .delete("/:id", checkToken(true), checkRoles("admin"), userController.deleteUser)

export default userRouter;