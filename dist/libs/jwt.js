"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAccessToken = createAccessToken;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = require("../config.js");
function createAccessToken(payload) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken["default"].sign(payload, _config.TOKEN_SECRET, {
      expiresIn: "1d"
    }, function (err, token) {
      if (err) reject(err);
      resolve(token);
    });
  });
}