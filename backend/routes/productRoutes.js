const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  getFeaturedProducts,
  getProductsByCategory,
  addProduct,
  searchProductsByName,
} = require("../controllers/productController");

const router = express.Router();

router.get("/all", getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/:id", getSingleProduct);
router.get("/category/:categoryName", getProductsByCategory);
router.post("/addProduct", addProduct);
router.get("/search/:searchTerm", searchProductsByName);

module.exports = router;
