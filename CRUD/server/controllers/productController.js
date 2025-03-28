const Product = require('../models/ProductSchema');

const createProduct = async(req, res) => {
    const { name, price, description, stock, isAvailable } = req.body;
    const newProduct = new Product({
        name, price, description, stock, isAvailable
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }
    catch(error) {
        res.status(500).json({ message : error.message });
    }
};

const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(error) {
        res.status(500).json({ message : error.message });
    }
};

const getProductsById = async(req, res) => {
    try {
        const Product = await Product.findById(req.params.id);
        if (Product) {
            res.status(200).json(Product);
        } else {
            res.status(404).json({ message : 'Product not found in DB.' });
        }
    }
    catch(error) {
        res.status(500).json({ message : error.message});
    }
};  

module.exports = { getProducts, getProductsById, createProduct };