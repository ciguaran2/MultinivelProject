"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getProducts = exports.getProduct = exports.deleteProduct = exports.createProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _productModel = _interopRequireDefault(require("../models/product.model.js"));
var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _productModel["default"].find();
        case 3:
          products = _context.sent;
          res.json(products);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: "Something went wrong"
          }));
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getProducts = getProducts;
var createProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, description, price, lenght, height, width, newProduct, saveProduct;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, name = _req$body.name, description = _req$body.description, price = _req$body.price, lenght = _req$body.lenght, height = _req$body.height, width = _req$body.width;
          newProduct = new _productModel["default"]({
            name: name,
            description: description,
            price: price,
            lenght: lenght,
            height: height,
            width: width
          });
          _context2.next = 5;
          return newProduct.save();
        case 5:
          saveProduct = _context2.sent;
          res.json(saveProduct);
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: "Something went wrong"
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function createProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createProduct = createProduct;
var getProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var product;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _productModel["default"].findById(req.params.id);
        case 3:
          product = _context3.sent;
          if (product) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Product not found"
          }));
        case 6:
          res.json(product);
          _context3.next = 12;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(404).json({
            message: "Product not found"
          }));
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function getProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getProduct = getProduct;
var deleteProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var product;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _productModel["default"].findByIdAndDelete(req.params.id);
        case 3:
          product = _context4.sent;
          if (product) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Product not found"
          }));
        case 6:
          return _context4.abrupt("return", res.sendStatus(204));
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(404).json({
            message: "Product not found"
          }));
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function deleteProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteProduct = deleteProduct;
var updateProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var product;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _productModel["default"].findByIdAndUpdate(req.params.id, req.body, {
            "new": true
          });
        case 3:
          product = _context5.sent;
          if (product) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Product not found"
          }));
        case 6:
          res.json(product);
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(404).json({
            message: "Product not found"
          }));
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function updateProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateProduct = updateProduct;