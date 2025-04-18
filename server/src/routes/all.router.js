import { Router } from "express";
import userRouter from "../modules/user/user.router.js";
import categoryRouter from "../modules/category/category.router.js";

const routes = Router()

routes.use("/users", userRouter)
routes.use("/categories", categoryRouter)

export default routes;