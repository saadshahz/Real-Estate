import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const review = mongoose.model("Review", reviewSchema);

export default review;
