"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateArtisanSchema = exports.createArtisanSchema = void 0;
var _zod = require("zod");
var createArtisanSchema = _zod.z.object({
  cedula_lider: _zod.z.string({
    required_error: "Cedula del lider es requerido"
  }).min(6, {
    message: "Cedula debe tener al menos 6 caracteres"
  }),
  cedula_artesano: _zod.z.string({
    required_error: "Cedula del artesano es requerido"
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
  })
});
exports.createArtisanSchema = createArtisanSchema;
var updateArtisanSchema = _zod.z.object({
  cedula_lider: _zod.z.string({
    required_error: "Cedula del lider es requerido"
  }).min(6, {
    message: "Cedula debe tener al menos 6 caracteres"
  }),
  cedula_artesano: _zod.z.string({
    required_error: "Cedula del artesano es requerido"
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
  })
});
exports.updateArtisanSchema = updateArtisanSchema;