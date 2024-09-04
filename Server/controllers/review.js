import Review from "../model/reviews.js";

export const AddReview = async (request, response) => {
  try {
    const review = {
      author: request.body.author,
      rating: request.body.rating,
      location: request.body.location,
      description: request.body.description,
    };

    const newReview = new Review(review);
    await newReview.save();

    return response.status(200).json({ msg: "Your Review Sent successfull" });
  } catch (error) {
    return response.status(500).json({ msg: `Review Failed ${error} ` });
  }
};
export const getReview = async (request, response) => {
  try {
    const post = await Review.find();

    return response.status(200).json(post);
  } catch (error) {
    return response.status(500).json({ msg: `Review Failed ${error} ` });
  }
};
