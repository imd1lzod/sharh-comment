import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users",
        required: true
    },
    businessId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Businesses",
        required: true
    }
  },
  {
    collection: "reviews",
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model("Review", reviewSchema);
