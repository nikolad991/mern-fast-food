const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const getUserFromToken = async (req, res) => {
  const token = req.cookies.food_jwt;
  if (!token) res.status(403).json({ error: "Not authorized" });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findOne({ _id: decoded.userId });
  return user;
};

module.exports = getUserFromToken;
