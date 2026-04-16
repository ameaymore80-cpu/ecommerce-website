const router = require("express").Router();

const {
  createOrder,
  getOrders,
  getOrderById,
} = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/", getOrders);
router.get("/:id", getOrderById);

module.exports = router;