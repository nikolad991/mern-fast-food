const Subscriber = require("../models/subscriberModel");

const addSubscriber = async (req, res) => {
  const { email } = req.body;
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    const subscriber = await Subscriber.findOne({ email: email });
    if (subscriber) {
      return res
        .status(409)
        .json({ error: `User with ${email} is already subscribed` });
    } else {
      await Subscriber.create({ email });
      return res
        .status(201)
        .json({ msg: `User with ${email} is successfully subscribed` });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while trying to subscribe" });
  }
};

module.exports = { addSubscriber };
