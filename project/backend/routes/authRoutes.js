const router = require("express").Router();
const { register, login } = require("../controllers/authController");

console.log(register);
console.log(login);

router.post("/register", register);
router.post("/login", login);

module.exports = router;