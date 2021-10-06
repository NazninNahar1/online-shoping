
const productservice = require('./products.service');
module.exports.createProduct = async function (req, res, next) {
    const product = req.body;
    const createdProduct = await productservice.createProduct(product);
    return res.json(createdProduct);

}
module.exports.getProducts = async function (req, res) {
    console.log(req);
    const products = await productservice.getProducts();
    return res.json(products);

}
module.exports.getProductById = async function (req, res) {

    const productId = req.params.id;
    const product = await productservice.getProductById(productId);
    return res.json(product);

}
module.exports.updateProductById = async function (req, res) {

    const productId = req.params.id;
    const update = req.body;
    const product = await productservice.updateProductById(productId, update);
    return res.json(product);

}
module.exports.deleteProductById = async function (req, res) {

    const productId = req.params.id;

    const product = await productservice.deleteProductById(productId);
    return res.json(product);

}