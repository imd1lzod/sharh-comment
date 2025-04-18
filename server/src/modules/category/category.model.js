import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 50, 
        },
        description: {
            type: String,
            minLength: 1
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },
        totalReviews: {
            type: Number
        }
    },
{
    collection: "categories",
    timestamps: true,
    versionKey: false
}
)

export default mongoose.model("Category", categorySchema)