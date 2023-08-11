const express = require("express");
const { getAllProducts, getSingleProduct, getFeaturedProducts } = require("../controllers/productController");

const router = express.Router();


router.get("/all", getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/:id", getSingleProduct);

module.exports = router;