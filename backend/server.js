const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;
app.use(cors())
app.use("/api/products", require("./routes/productRoutes"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})