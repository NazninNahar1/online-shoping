const express = require('express');
const router = express.Router();

const productController = require('../products/products.controller');
const userController = require('../user/users.controllers');


/* GET Product page. */
router.post('/products', userController.isAuthenticated, productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProductById);
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;