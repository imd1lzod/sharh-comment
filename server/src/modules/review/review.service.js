import reviewModel from "./review.model.js";

class ReviewService {
    #reviewModel
    constructor() {
        this.#reviewModel = reviewModel
    }

    getAllReviews = async () => {

        const reviews = await this.#reviewModel.find().populate("userId", "name email").populate('businessId', "name description")

        return {
            message: "Succes",
            count: reviews.length,
            data: reviews
        }
    }

    getOneReview = async (id) => {
        const category = this.#reviewModel.findById(id).populate("userId", "name email").populate('businessId', "name description")

        return {
            message: "succes",
            data: category
        }
    }

    createReview = async (rating, comment, userId, businessId) => {
        await this.#reviewModel.create(
            {
                rating: rating,
                comment: comment,
                userId: userId,
                businessId: businessId
            }
        )

        return "Review yaratildi"
    }

    updateReview = async (id, rating, comment) => {
        await this.#reviewModel.findByIdAndUpdate(id, {
            rating: rating,
            comment: comment
        })

        return "Review yangilandi"
    }

    deleteReview = async (id) => {
        await this.#reviewModel.findByIdAndDelete(id)

        return "Review tozalandi"
    }
}

export default new ReviewService()