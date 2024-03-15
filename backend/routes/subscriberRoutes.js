const express = require("express");
const { addSubscriber } = require("../controllers/subscriberController");

const router = express.Router();

router.post("/", addSubscriber);

module.exports = router;
