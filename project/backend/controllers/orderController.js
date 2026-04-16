// controllers/orderController.js

// Create order
const createOrder = async (req, res) => {
  res.json({ message: "Create order working" });
};

// Get all orders
const getOrders = async (req, res) => {
  res.json({ message: "Get orders working" });
};

// Get single order
const getOrderById = async (req, res) => {
  res.json({ message: "Get order by ID working" });
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
};