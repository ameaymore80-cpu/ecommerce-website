const Cart = require("../models/Cart");

// Get cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({ user: req.user.id })
      .populate("product");

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart" });
  }
};

// Add to cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const existingItem = await Cart.findOne({
      user: req.user.id,
      product: productId,
    });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.json(existingItem);
    }

    const newItem = new Cart({
      user: req.user.id,
      product: productId,
      quantity,
    });

    await newItem.save();

    res.json(newItem);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding to cart" });
  }
};

// Remove from cart
const removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
};