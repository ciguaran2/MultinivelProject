"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _App = _interopRequireDefault(require("./App.js"));
var _db = require("./db");
(0, _db.connectDB)();
_App["default"].listen(3000);
console.log('Server on port', 3000);