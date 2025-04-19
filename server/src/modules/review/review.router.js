import { Router } from "express";
import reviewController from "./review.controller.js";

const reviewRouter = Router()

reviewRouter
    .get("/", reviewController.getAllReview)
    .get("/:id", reviewController.getOneReview)
    .post("/", reviewController.createReview)
    .put("/:id", reviewController.updateReview)
    .delete("/:id", reviewController.deleteReview)

export default reviewRouter