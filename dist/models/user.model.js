"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var userSchema = new _mongoose["default"].Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    require: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model('User', userSchema);
exports["default"] = _default;