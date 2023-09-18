"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _productsRoutes = _interopRequireDefault(require("./routes/products.routes.js"));
var _leadsRoutes = _interopRequireDefault(require("./routes/leads.routes.js"));
var _artisanRoutes = _interopRequireDefault(require("./routes/artisan.routes.js"));
var _cors = _interopRequireDefault(require("cors"));
var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: 'http://localhost:5173',
  //origin: 'https://susu-wayuu.up.railway.app',
  credentials: true
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use("/api", _authRoutes["default"]);
app.use("/api", _productsRoutes["default"]);
app.use("/api", _leadsRoutes["default"]);
app.use("/api", _artisanRoutes["default"]);
var _default = app;
exports["default"] = _default;