const { json } = require("express");
const products = require("../data");
const getAllProducts = (req, res) => {
    res.status(200).json(products);
}
const getSingleProduct = (req, res) => {
    const { id } = req.params;
    console.log(id);
    const product = products.find(product => product._id === id);
    if (product)
        res.status(200).json(product);
    res.status(404).json({ "error": "Not Found" });
}
const getFeaturedProducts = (req, res) => {
    const ids = ["1", "2", "3", "4"];
    const featuredProducts = products.filter(product => ids.includes(product._id))
    console.log(featuredProducts);
    res.status(200).json(featuredProducts);
}


module.exports = { getAllProducts, getSingleProduct, getFeaturedProducts }