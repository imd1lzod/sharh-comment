import { Router } from "express"
import businessController from "./business.controller.js"

const businessRouter = Router()

businessRouter
    .get("/", businessController.getAllBusinesses)
    .get("/:id", businessController.getOneBusiness)
    .post("/", businessController.createBusiness)
    .put("/:id", businessController.updateBusiness)
    .delete("/:id", businessController.deleteBusiness)

export default businessRouter