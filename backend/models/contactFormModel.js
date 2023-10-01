const mongoose = require("mongoose");

const contactFormSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

const ContactForm = mongoose.model("ContactForm", contactFormSchema);
module.exports = ContactForm;
