import getMethod from "../../fetchCalls/getMethod";

const getReview = async () => {
  try {
    const data = await getMethod("/reviews");
    return data;
  } catch (error) {
    return error;
  }
};

export default getReview;
