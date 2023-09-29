const Slider = require("../models/sliderModel");

const getSlider = async (req, res) => {
  try {
    const sliderData = await Slider.find();
    res.status(200).json(sliderData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching slider data" });
  }
};

const setSlider = async (req, res) => {
  try {
    await Slider.deleteMany({});
    const newData = req.body;
    await Slider.insertMany(newData);
    res.status(200).json({ message: "Slider data replaced successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while replacing slider data" });
  }
};

module.exports = { getSlider, setSlider };
