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
        },
    },
{
    collection: "categories",
    timestamps: true,
    versionKey: false
}
)

export default mongoose.model("Categories", categorySchema)