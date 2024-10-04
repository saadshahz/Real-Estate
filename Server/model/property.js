import mongoose from "mongoose";

const propertySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coveredArea: {
    type: String, 
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["villa", "apartment", "house"],
  },
  no_of_bedroom: {
    type: Number,
    required: true,
  },
  no_of_bathroom: {
    type: Number,
    required: true,
  },
  facility: {
    type: [String],
    required: true,
  },
});

const property = mongoose.model("property", propertySchema);

export default property;
