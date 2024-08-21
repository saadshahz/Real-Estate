import User from "../model/user.js";

export const singupUser = async (request, response) => {
  try {
    const user = {
      name: request.body.name,
      username: request.body.username,
      password: request.body.password,
    };

    const newUser = new User(user);
    await newUser.save();

    return response.status(200).json({ msg: "Signup successfull" });
  } catch (error) {
    return response.status(500).json({ msg: `Signup Failed ${error} ` });
  }
};
