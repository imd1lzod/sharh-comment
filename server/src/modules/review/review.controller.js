import reviewService from "./review.service.js";

class ReviewController {
  #reviewService;
  constructor() {
    this.#reviewService = reviewService;
  }

  getAllReview = async (req, res, next) => {
    try {
      const data = await this.#reviewService.getAllReviews();
      res.send(data);
    } catch (error) {
      next(error);
    }
  };

  createReview = async (req, res, next) => {
    try {

      const { rating, comment, userId, businessId } = req.body;
      await this.#reviewService.createReview(rating, comment, userId, businessId)
      res.send({
        message: "Review yaratildi",
      });
    } catch (error) {
      next(error);
    }
  };

  getOneReview = async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await this.#reviewService.getOneReview(id)

      res.send(data);
    } catch (error) {
      next(error);
    }
  };

  updateReview = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { rating, comment} = req.body;

      await this.#reviewService.updateReview(id, rating, comment);

      res.send({
        message: "Review yangilandi"
      })
    } catch (error) {
      next(error);
    }
  };

  deleteReview = async (req, res, next) => {
    try {
        const { id } = req.params

        await this.#reviewService.deleteReview(id)

        res.send({
            message: "Review tozlanadi"
        })
    } catch (error) {
        
    }
  }
}


export default new ReviewController()