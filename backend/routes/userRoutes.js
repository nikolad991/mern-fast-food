const express = require("express");
const {
  registerUser,
  loginUser,
  getAuthorizedUser,
  updateUser,
  changePassword,
} = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", getAuthorizedUser);
router.put("/update", updateUser);
router.put("/changepassword", changePassword);

module.exports = router;
