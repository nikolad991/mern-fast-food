const express = require("express");
const {
  sendContactFormMessage,
} = require("../controllers/contactMessageController");

const router = express.Router();

router.post("/", sendContactFormMessage);
module.exports = router;
