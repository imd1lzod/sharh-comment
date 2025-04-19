import { Router } from "express";
import userRouter from "../modules/user/user.router.js";
import categoryRouter from "../modules/category/category.router.js";
import businessRouter from "../modules/business/business.router.js";
import reviewRouter from "../modules/review/review.router.js";

const routes = Router()

routes.use("/users", userRouter)
routes.use("/categories", categoryRouter)
routes.use("/businesses", businessRouter)
routes.use("/reviews", reviewRouter)

export default routes;