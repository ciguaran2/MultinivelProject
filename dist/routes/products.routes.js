"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validateToken = require("../middlewares/validateToken");
var _products = require("../controllers/products.controller");
var _validator = require("../middlewares/validator.middleware");
var _product = require("../schemas/product.schema");
var router = (0, _express.Router)();
router.get('/products', _validateToken.authRequired, _products.getProducts);
router.get('/products/:id', _validateToken.authRequired, _products.getProduct);
router.post('/products', _validateToken.authRequired, (0, _validator.validateSchema)(_product.createProductSchema), _products.createProduct);
router["delete"]('/products/:id', _validateToken.authRequired, _products.deleteProduct);
router.put('/products/:id', _validateToken.authRequired, (0, _validator.validateSchema)(_product.updateProductSchema), _products.updateProduct);
var _default = router;
exports["default"] = _default;