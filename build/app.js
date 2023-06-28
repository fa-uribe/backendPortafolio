"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _initialSetup = require("./libs/initialSetup.js");
var _mailNotifications = require("../src/mail/mailNotifications.js");
var _Event = _interopRequireDefault(require("../src/models/Event.js"));
var _moment = _interopRequireDefault(require("moment"));
var _authRoutes = _interopRequireDefault(require("./routes/authentication/auth.routes.js"));
var _userRoutes = _interopRequireDefault(require("./routes/user.routes.js"));
var _careerRoutes = _interopRequireDefault(require("./routes/career.routes.js"));
var _calendarRoutes = _interopRequireDefault(require("./routes/calendar/calendar.routes.js"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // Importa las rutas
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
app.get('/eventos', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var eventos, _iterator, _step, evento, eventDate, today, differenceInDays, deactivateNotf;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _Event["default"].find({
            notified: false
          });
        case 3:
          eventos = _context.sent;
          _iterator = _createForOfIteratorHelper(eventos);
          _context.prev = 5;
          _iterator.s();
        case 7:
          if ((_step = _iterator.n()).done) {
            _context.next = 20;
            break;
          }
          evento = _step.value;
          eventDate = (0, _moment["default"])(evento.event_date, 'YYYY-MM-DD');
          today = (0, _moment["default"])();
          differenceInDays = eventDate.diff(today, 'days');
          if (!(differenceInDays > 0 && differenceInDays <= 1)) {
            _context.next = 18;
            break;
          }
          _context.next = 15;
          return (0, _mailNotifications.sendEventNotification)(evento);
        case 15:
          _context.next = 17;
          return _Event["default"].findByIdAndUpdate(evento._id, {
            notified: true
          });
        case 17:
          deactivateNotf = _context.sent;
        case 18:
          _context.next = 7;
          break;
        case 20:
          _context.next = 25;
          break;
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](5);
          _iterator.e(_context.t0);
        case 25:
          _context.prev = 25;
          _iterator.f();
          return _context.finish(25);
        case 28:
          res.json("Enviando mail de notificaion a usuarios registrados");
          _context.next = 35;
          break;
        case 31:
          _context.prev = 31;
          _context.t1 = _context["catch"](0);
          console.error('Error al obtener los eventos:', _context.t1);
          res.status(500).json({
            error: 'Error al obtener los eventos'
          });
        case 35:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 31], [5, 22, 25, 28]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// Espacio para rutas existentes
app.use('/myEstCalendarAPI/auth', _authRoutes["default"]);
app.use('/myEstCalendarAPI/user', _userRoutes["default"], _calendarRoutes["default"]);
app.use('/myEstCalendarAPI/career', _careerRoutes["default"]);
var _default = app;
exports["default"] = _default;