const express = require("express");
const { getAllProducts, getSingleProduct, getFeaturedProducts, getProductsByCategory, addProduct } = require("../controllers/productController");

const router = express.Router();


router.get("/all", getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/:id", getSingleProduct);
router.get("/category/:categoryName", getProductsByCategory);
router.post("/addProduct", addProduct)

module.exports = router;