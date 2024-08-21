import mongoose from "mongoose";

const connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@real-estate.jmj38.mongodb.net/?retryWrites=true&w=majority&appName=Real-Estate`;

  try {
    await mongoose.connect(URL);
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error While Connecting Database", error);
  }
};
export default connection;
