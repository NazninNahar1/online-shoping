
const Product = require('./products.model');

module.exports.createProduct = function (product) {

    return Product.create(product);
}

module.exports.getProducts = function (product) {

    return Product.find({});
}
module.exports.getProductById = function (productId) {

    return Product.find({ _id: productId });
}
module.exports.updateProductById = function (productId, update) {

    return Product.findByIdAndUpdate(productId, update, { new: true });
}
module.exports.deleteProductById = function (productId) {

    return Product.findByIdAndDelete(productId);
}