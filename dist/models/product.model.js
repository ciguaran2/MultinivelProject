"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var productSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  lenght: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  width: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model("Product", productSchema);
exports["default"] = _default;