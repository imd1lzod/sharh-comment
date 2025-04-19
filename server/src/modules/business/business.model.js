import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 100
        },
        description: {
            type: String,
        },
        address: {
            type: String,
            unique: true,
            // required: true
        },
        location: {
            type: String,
            // required: true
        },
        website: {
            type: String,
            unique: true
        },
        imageUrl: {
            type: String
        },
        ownerId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Users",
            required: true
        },
        categoryId:  {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Categories",
            required: true
        }
    },
    {
        collection: "businesses",
        timestamps: true,
        versionKey: false
    }
)

export default mongoose.model("Businesses", businessSchema)