const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

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
      res.status(400).send(error);
    }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const passwordCheck = await user.matchPassword(password);
    if (passwordCheck) {
      generateToken(res, user._id);
      res.status(200).send({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(401).json({ error: "Incorrect Password" });
    }
  } else
    res.status(401).json({ error: `User with email ${email} does not exist.` });
};
module.exports = { registerUser, loginUser };
