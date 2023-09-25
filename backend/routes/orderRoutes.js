const express = require("express");
const {
  createOrder,
  getOrder,
  getOrdersByUser,
  confirmOrder,
} = require("../controllers/orderController");
const router = express.Router();

router.post("/create", createOrder);
router.get("/myorders", getOrdersByUser);
router.get("/:orderId", getOrder);
router.put("/confirm", confirmOrder);

module.exports = router;
