const express = require("express");
const {
  registerUser,
  loginUser,
  getAuthorizedUser,
  updateUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", getAuthorizedUser);
router.put("/update", updateUser);

module.exports = router;
