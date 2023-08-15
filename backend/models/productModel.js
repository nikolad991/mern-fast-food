const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    ,
    category: {
        type: String,
        required: true
    },
    rating: Number,
    imageUrl: {
        type: String,
        required: true
    },
    description: { type: String, required: true },
    options: [
        {
            name: String,
            choices: [String],
            default: String,
            additionalPrice:{type:Number, default:2}
        }
    ]

}, {
    timestamps: true,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;