import mongoose from "mongoose";
import Property from "../model/property.js";
const { ObjectId } = mongoose.Types;

export const getProperty = async (request, response) => {
  try {
    const post = await Property.find();

    return response.status(200).json(post);
  } catch (error) {
    return response.status(500).json({ msg: `Property Failed ${error} ` });
  }
};

export const getPropertyById = async (request, response) => {
  const { id } = request.params;

  if (!ObjectId.isValid(id)) {
    return response.status(400).json({ msg: "Invalid property ID" });
  }

  try {
    const property = await Property.findById(id);

    if (!property) {
      return response.status(404).json({ msg: "Property not found" });
    }

    return response.status(200).json(property);
  } catch (error) {
    return response
      .status(500)
      .json({ msg: `Failed to retrieve property: ${error.message}` });
  }
};
