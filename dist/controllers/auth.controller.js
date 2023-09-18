"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.register = exports.profile = exports.logout = exports.login = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _userModel = _interopRequireDefault(require("../models/user.model.js"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _jwt = require("../libs/jwt");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = require("../config.js");
var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, password, username, userFound, passwordHash, newUser, userSaved, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password, username = _req$body.username;
          _context.prev = 1;
          _context.next = 4;
          return _userModel["default"].findOne({
            email: email
          });
        case 4:
          userFound = _context.sent;
          if (!userFound) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(400).json(["The email is already in use"]));
        case 7:
          _context.next = 9;
          return _bcryptjs["default"].hash(password, 10);
        case 9:
          passwordHash = _context.sent;
          newUser = new _userModel["default"]({
            username: username,
            email: email,
            password: passwordHash
          });
          _context.next = 13;
          return newUser.save();
        case 13:
          userSaved = _context.sent;
          _context.next = 16;
          return (0, _jwt.createAccessToken)({
            id: userSaved._id
          });
        case 16:
          token = _context.sent;
          res.cookie('token', token);
          res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
          });
          console.log("Estoy en Register de Railway");
          _context.next = 25;
          break;
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            message: _context.t0.message
          });
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 22]]);
  }));
  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.register = register;
var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, username, userFound, isMatch, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password, username = _req$body2.username;
          _context2.prev = 1;
          _context2.next = 4;
          return _userModel["default"].findOne({
            email: email
          });
        case 4:
          userFound = _context2.sent;
          if (userFound) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "User not found"
          }));
        case 7:
          _context2.next = 9;
          return _bcryptjs["default"].compare(password, userFound.password);
        case 9:
          isMatch = _context2.sent;
          if (isMatch) {
            _context2.next = 12;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "Incorrect password"
          }));
        case 12:
          _context2.next = 14;
          return (0, _jwt.createAccessToken)({
            id: userFound._id
          });
        case 14:
          token = _context2.sent;
          res.cookie('token', token, {
            httpOnly: false,
            // client can't get cookie by script
            secure: true,
            // only transfer over https
            sameSite: "None" // only sent for requests to the same FQDN as the domain in the cookie
          });

          res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
          });
          console.log("Estoy en Login de Railway");
          _context2.next = 23;
          break;
        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: _context2.t0.message
          });
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 20]]);
  }));
  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.login = login;
var logout = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          res.cookie("token", "", {
            expires: new Date(0)
          });
          console.log("Estoy en logout de Railway");
          return _context3.abrupt("return", res.sendStatus(200));
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function logout(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.logout = logout;
var profile = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var userFound;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _userModel["default"].findById(req.user.id);
        case 2:
          userFound = _context4.sent;
          if (userFound) {
            _context4.next = 5;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: "User not found"
          }));
        case 5:
          return _context4.abrupt("return", res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
          }));
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function profile(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.profile = profile;
var verifyToken = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var token;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          token = req.cookies.token;
          if (token) {
            _context6.next = 3;
            break;
          }
          return _context6.abrupt("return", res.status(401).json({
            message: 'Unauthorized'
          }));
        case 3:
          _jsonwebtoken["default"].verify(token, _config.TOKEN_SECRET, /*#__PURE__*/function () {
            var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(err, user) {
              var userFound;
              return _regenerator["default"].wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!err) {
                      _context5.next = 2;
                      break;
                    }
                    return _context5.abrupt("return", res.status(401).json({
                      message: 'Unauthorized'
                    }));
                  case 2:
                    _context5.next = 4;
                    return _userModel["default"].findById(user.id);
                  case 4:
                    userFound = _context5.sent;
                    if (userFound) {
                      _context5.next = 7;
                      break;
                    }
                    return _context5.abrupt("return", res.status(401).json({
                      message: 'Unauthorized'
                    }));
                  case 7:
                    return _context5.abrupt("return", res.json({
                      id: userFound._id,
                      username: userFound.username,
                      email: userFound.email
                    }));
                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x11, _x12) {
              return _ref6.apply(this, arguments);
            };
          }());
          console.log("Estoy en verifyToken de Railway");
        case 5:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function verifyToken(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.verifyToken = verifyToken;