require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.x8cnld4.mongodb.net/food-app?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected!"));
console.log(process.env.NODE_ENV);
app.use(
  cors({
    credentials: true,
    origin:
      process.env.NODE_ENV === "development" ? "http://192.168.1.2:5173" : "",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/slider", require("./routes/sliderRoutes"));
app.use("/api/contact", require("./routes/contactFormRoutes"));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
