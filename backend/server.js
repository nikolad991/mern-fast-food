require("dotenv").config();
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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", require("./routes/productRoutes"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
