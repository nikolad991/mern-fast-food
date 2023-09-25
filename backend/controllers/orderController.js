const Order = require("../models/orderModel");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const getUserFromToken = require("../utils/getUserFromToken");

const createOrder = async (req, res) => {
  const token = req.cookies.food_jwt;
  if (!token) res.status(403).json({ error: "Not authorized" });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findOne({ _id: decoded.userId });

  try {
    const order = await Order.create({
      user: user,
      items: req.body.cart,
      total: req.body.total,
      additionalNotes: req.body.additionalNotes,
      paymentMethod: req.body.paymentMethod,
    });

    res.status(200).json(order._id);
  } catch (error) {
    res.status(400).json({ error: "Order not created" });
  }
};
const getOrder = async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findOne({ _id: orderId });
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
};
const getOrdersByUser = async (req, res) => {
  const token = req.cookies.food_jwt;
  if (!token) res.status(403).json({ error: "Not authorized" });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findOne({ _id: decoded.userId });
  try {
    const orders = await Order.find({ user: user });
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: "Error" });
  }
};
const confirmOrder = async (req, res) => {
  const { orderId } = req.body;
  try {
    const order = await Order.findOne({ _id: orderId });
    const user = await getUserFromToken(req, res);
    if (!user._id.equals(order.user)) {
      res.status(403).json({ error: "Not allowed" });
    } else {
      order.orderStatus = "Confirmed";
      await order.save();
      res.status(200).json({ msg: "Order confirmed" });
    }
  } catch (error) {
    res.status(404).send({ error: "Order not Found" });
  }
};
module.exports = { createOrder, getOrder, getOrdersByUser, confirmOrder };
