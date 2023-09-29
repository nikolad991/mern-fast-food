const express = require("express");
const { getSlider, setSlider } = require("../controllers/sliderController");
const router = express.Router();

router.get("/", getSlider);
router.post("/", setSlider);

module.exports = router;
