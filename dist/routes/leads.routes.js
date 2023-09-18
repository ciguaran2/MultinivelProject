"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validateToken = require("../middlewares/validateToken");
var _leads = require("../controllers/leads.controller");
var _validator = require("../middlewares/validator.middleware");
var _lead = require("../schemas/lead.schema");
var router = (0, _express.Router)();
router.get('/leads', _validateToken.authRequired, _leads.getLeads);
router.get('/leads/:id', _validateToken.authRequired, _leads.getLead);
router.post('/leads', _validateToken.authRequired, (0, _validator.validateSchema)(_lead.createLeadSchema), _leads.createLead);
router["delete"]('/leads/:id', _validateToken.authRequired, _leads.deleteLead);
router.put('/leads/:id', _validateToken.authRequired, (0, _validator.validateSchema)(_lead.updateLeadSchema), _leads.updateLead);
var _default = router;
exports["default"] = _default;