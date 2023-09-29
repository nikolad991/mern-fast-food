const mongoose = require("mongoose");

const sliderSchema = mongoose.Schema({
  text: String,
  subtext: String,
  imgUrl: String,
  buttonText: String,
  buttonLink: String,
});

const Slider = mongoose.model("Slider", sliderSchema);
module.exports = Slider;
