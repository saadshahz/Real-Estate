import getMethod from "../../fetchCalls/getMethod";
const getProperty = async () => {
  try {
    const data = await getMethod("property");
    return data;
  } catch (error) {
    return error;
  }
};

export default getProperty;
