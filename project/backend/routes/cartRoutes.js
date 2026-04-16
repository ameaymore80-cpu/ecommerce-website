const router = require("express").Router();

const {
  getCart,
  addToCart,
  removeFromCart,
} = require("../controllers/cartController");

const authMiddleware = require("../middleware/authMiddleware");

// ✅ protect routes
router.get("/", authMiddleware, getCart);
router.post("/", authMiddleware, addToCart);
router.delete("/:id", authMiddleware, removeFromCart);

module.exports = router;