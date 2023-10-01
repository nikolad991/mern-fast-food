const ContactForm = require("../models/contactFormModel");

const sendContactFormMessage = async (req, res) => {
  try {
    await ContactForm.create(req.body);
    res.status(200).json({ msg: "Your message has been sent" });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports = { sendContactFormMessage };
