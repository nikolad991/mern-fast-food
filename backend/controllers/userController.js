const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ error: "User with this email already exists!" });
  } else
    try {
      const user = await User.create({ firstName, lastName, email, password });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
};

module.exports = { registerUser };
