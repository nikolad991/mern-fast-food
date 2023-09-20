const express = require("express");
const {
  createOrder,
  getOrder,
  getOrdersByUser,
} = require("../controllers/orderController");
const router = express.Router();

router.post("/create", createOrder);
router.get("/myorders", getOrdersByUser);
router.get("/:orderId", getOrder);

module.exports = router;
