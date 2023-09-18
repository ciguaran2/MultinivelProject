"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = require("../controllers/auth.controller");
var _validateToken = require("../middlewares/validateToken");
var _validator = require("../middlewares/validator.middleware");
var _auth2 = require("../schemas/auth.schema");
var router = (0, _express.Router)();
router.post('/register', (0, _validator.validateSchema)(_auth2.registerSchema), _auth.register);
router.post('/login', (0, _validator.validateSchema)(_auth2.loginSchema), _auth.login);
router.post('/logout', _auth.logout);
router.get('/verify', _auth.verifyToken);
router.get('/profile', _validateToken.authRequired, _auth.profile);
var _default = router;
exports["default"] = _default;