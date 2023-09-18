"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLead = exports.getLeads = exports.getLead = exports.deleteLead = exports.createLead = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _leadModel = _interopRequireDefault(require("../models/lead.model.js"));
var getLeads = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var leads;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _leadModel["default"].find();
        case 3:
          leads = _context.sent;
          res.json(leads);
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
  return function getLeads(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getLeads = getLeads;
var createLead = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, cedula, nombres, apellidos, comunidad, celular, fullname, newLead, saveLead;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, cedula = _req$body.cedula, nombres = _req$body.nombres, apellidos = _req$body.apellidos, comunidad = _req$body.comunidad, celular = _req$body.celular, fullname = _req$body.fullname;
          newLead = new _leadModel["default"]({
            cedula: cedula,
            nombres: nombres,
            apellidos: apellidos,
            comunidad: comunidad,
            celular: celular,
            fullname: fullname
          });
          _context2.next = 5;
          return newLead.save();
        case 5:
          saveLead = _context2.sent;
          res.json(saveLead);
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
  return function createLead(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createLead = createLead;
var getLead = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var lead;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _leadModel["default"].findById(req.params.id);
        case 3:
          lead = _context3.sent;
          if (lead) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Lead not found"
          }));
        case 6:
          res.json(lead);
          _context3.next = 12;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(404).json({
            message: "Lead not found"
          }));
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function getLead(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getLead = getLead;
var deleteLead = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var lead;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _leadModel["default"].findByIdAndDelete(req.params.id);
        case 3:
          lead = _context4.sent;
          if (lead) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Lead not found"
          }));
        case 6:
          return _context4.abrupt("return", res.sendStatus(204));
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(404).json({
            message: "Lead not found"
          }));
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function deleteLead(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteLead = deleteLead;
var updateLead = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var lead;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _leadModel["default"].findByIdAndUpdate(req.params.id, req.body, {
            "new": true
          });
        case 3:
          lead = _context5.sent;
          if (lead) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Lead not found"
          }));
        case 6:
          res.json(lead);
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(404).json({
            message: "Lead not found"
          }));
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function updateLead(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateLead = updateLead;