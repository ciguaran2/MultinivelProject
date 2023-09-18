"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLeadSchema = exports.createLeadSchema = void 0;
var _zod = require("zod");
var createLeadSchema = _zod.z.object({
  cedula: _zod.z.string({
    required_error: "Cedula es requerido"
  }).min(6, {
    message: "Cedula debe tener al menos 6 caracteres"
  }),
  nombres: _zod.z.string({
    required_error: "Nombres es requerido"
  }),
  apellidos: _zod.z.string({
    required_error: "Apellidos es requerido"
  }),
  comunidad: _zod.z.string({
    required_error: "Comunidad es requerida"
  }),
  celular: _zod.z.string({
    required_error: "Celular es requerido"
  }),
  fullname: _zod.z.string({
    required_error: "Fullname es requerido"
  })
});
exports.createLeadSchema = createLeadSchema;
var updateLeadSchema = _zod.z.object({
  cedula: _zod.z.string({
    required_error: "Cedula es requerido"
  }).min(6, {
    message: "Cedula debe tener al menos 6 caracteres"
  }),
  nombres: _zod.z.string({
    required_error: "Nombres es requerido"
  }),
  apellidos: _zod.z.string({
    required_error: "Apellidos es requerido"
  }),
  comunidad: _zod.z.string({
    required_error: "Comunidad es requerida"
  }),
  celular: _zod.z.string({
    required_error: "Celular es requerido"
  }),
  fullname: _zod.z.string({
    required_error: "Fullname es requerido"
  })
});
exports.updateLeadSchema = updateLeadSchema;