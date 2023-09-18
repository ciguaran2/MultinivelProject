"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductSchema = exports.createProductSchema = void 0;
var _zod = require("zod");
var createProductSchema = _zod.z.object({
  name: _zod.z.string({
    required_error: "name is required"
  }),
  description: _zod.z.string({
    required_error: "description must be a string"
  }),
  price: _zod.z.string({
    required_error: "Price is required"
  }).min(3, {
    message: "Price must be at least 3 characters"
  }),
  lenght: _zod.z.string({
    required_error: "lenght is required"
  }).min(1, {
    required_error: "lenght must be at least 1 number"
  }),
  height: _zod.z.string({
    required_error: "height is required"
  }).min(1, {
    message: "height must be at least 1 number"
  }),
  width: _zod.z.string({
    required_error: "width is required"
  }).min(1, {
    message: "width must be at least 1 number"
  })
});
exports.createProductSchema = createProductSchema;
var updateProductSchema = _zod.z.object({
  name: _zod.z.string({
    required_error: "name is required"
  }),
  description: _zod.z.string({
    required_error: "description must be a string"
  }),
  price: _zod.z.string({
    required_error: "Price is required"
  }).min(3, {
    message: "Price must be at least 3 characters"
  }),
  lenght: _zod.z.string({
    required_error: "lenght is required"
  }).min(1, {
    required_error: "lenght must be at least 1 number"
  }),
  height: _zod.z.string({
    required_error: "height is required"
  }).min(1, {
    message: "height must be at least 1 number"
  }),
  width: _zod.z.string({
    required_error: "width is required"
  }).min(1, {
    message: "width must be at least 1 number"
  })
});
exports.updateProductSchema = updateProductSchema;