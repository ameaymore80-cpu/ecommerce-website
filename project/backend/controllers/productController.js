// controllers/productController.js

// Get all products
const getProducts = async (req, res) => {
  res.json({ message: "Get all products working" });
};

// Get single product
const getProductById = async (req, res) => {
  res.json({ message: "Get single product working" });
};

// Create product
const createProduct = async (req, res) => {
  res.json({ message: "Create product working" });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};