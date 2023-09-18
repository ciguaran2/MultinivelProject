"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validateToken = require("../middlewares/validateToken");
var _artisan = require("../controllers/artisan.controller");
var _validator = require("../middlewares/validator.middleware");
var _artisan2 = require("../schemas/artisan.schema");
var router = (0, _express.Router)();
router.get('/artisans', _validateToken.authRequired, _artisan.getArtisans);
router.get('/artisans/:id', _validateToken.authRequired, _artisan.getArtisan);
router.post('/artisans', _validateToken.authRequired, (0, _validator.validateSchema)(_artisan2.createArtisanSchema), _artisan.createArtisan);
router["delete"]('/artisans/:id', _validateToken.authRequired, _artisan.deleteArtisan);
router.put('/artisans/:id', _validateToken.authRequired, (0, _validator.validateSchema)(_artisan2.updateArtisanSchema), _artisan.updateArtisan);
var _default = router;
exports["default"] = _default;