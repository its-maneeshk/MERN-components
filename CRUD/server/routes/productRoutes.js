const express = require('express');
const { getProducts, getProductsById, createProduct } = require('../controllers/productController');

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductsById);

module.exports = router ;