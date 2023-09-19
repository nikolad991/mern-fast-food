const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [mongoose.Schema.Types.Mixed],
    paymentMethod: String,
    additionalNotes: String,
    orderStatus: { type: String, default: "Pending" },
    total: Number,
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
