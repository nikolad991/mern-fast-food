
const products = require("../data");
const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);

};
const getProductsByCategory = (req, res) => {
    const { categoryName } = req.params;
    const productsByCategory = products.filter(
        (product) => product.category.toLowerCase() === categoryName
    );
    res.status(200).json(productsByCategory);
};
const getSingleProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({ _id: id });
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ error: "Not Found" });
    }

};
const getFeaturedProducts = async (req, res) => {
    const featuredProducts = await Product.find({}).limit(4);
    res.status(200).json(featuredProducts);
};
const addProduct = async (req, res) => {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
    console.log("Product added");
};

module.exports = {
    getAllProducts,
    getSingleProduct,
    getFeaturedProducts,
    getProductsByCategory,
    addProduct,
};
