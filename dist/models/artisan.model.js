"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var artisanSchema = new _mongoose["default"].Schema({
  cedula_lider: {
    type: String,
    required: true
  },
  cedula_artesano: {
    type: String,
    required: true
  },
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  comunidad: {
    type: String,
    required: true
  },
  celular: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model("Artisan", artisanSchema);
exports["default"] = _default;