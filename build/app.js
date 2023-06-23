"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _initialSetup = require("./libs/initialSetup.js");
var _auth = _interopRequireDefault(require("./routes/authentication/auth.routes"));
var _userRoutes = _interopRequireDefault(require("./routes/user.routes.js"));
var _careerRoutes = _interopRequireDefault(require("./routes/career.routes.js"));
var _calendarRoutes = _interopRequireDefault(require("./routes/calendar/calendar.routes.js"));
//import de routes

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json("Backend API working properly");
});

//Espacio para rutas
app.use('/myEstCalendarAPI/auth', _auth["default"]);
app.use('/myEstCalendarAPI/user', _userRoutes["default"], _calendarRoutes["default"]);
app.use('/myEstCalendarAPI/career', _careerRoutes["default"]);
//
var _default = app;
exports["default"] = _default;