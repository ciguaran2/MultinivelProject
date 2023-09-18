"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerSchema = exports.loginSchema = void 0;
var _zod = require("zod");
var registerSchema = _zod.z.object({
  username: _zod.z.string({
    required_error: "Username is required"
  }),
  email: _zod.z.string({
    required_error: "Email is required"
  }).email({
    message: "Invalid email"
  }),
  password: _zod.z.string({
    required_error: "Password is required"
  }).min(6, {
    message: "Password must be at least 6 characters"
  })
});
exports.registerSchema = registerSchema;
var loginSchema = _zod.z.object({
  email: _zod.z.string({
    required_error: "Email is required"
  }).email({
    message: "Email invalido"
  }),
  password: _zod.z.string({
    required_error: "Password is required"
  }).min(6, {
    message: "La clave deberia contener al menos 6 caracteres"
  })
});
exports.loginSchema = loginSchema;