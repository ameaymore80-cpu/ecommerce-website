const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: String,
  items: Array,
  totalPrice: Number,
  status: { type: String, default: "Pending" }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);