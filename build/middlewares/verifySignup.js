"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRolesExisted = exports.checkDuplicateEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Role = _interopRequireWildcard(require("../models/Role"));
var _User = _interopRequireDefault(require("../models/User"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var checkRolesExisted = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var roles;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!req.body.roles) {
            _context.next = 8;
            break;
          }
          _context.next = 3;
          return _Role["default"].find({
            _id: req.body.roles
          });
        case 3:
          roles = _context.sent;
          if (!(roles.length > 0)) {
            _context.next = 7;
            break;
          }
          _context.next = 8;
          break;
        case 7:
          return _context.abrupt("return", res.status(400).json("Role does not exist in DB"));
        case 8:
          next();
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function checkRolesExisted(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.checkRolesExisted = checkRolesExisted;
var checkDuplicateEmail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _User["default"].findOne({
            email: req.body.email
          });
        case 2:
          user = _context2.sent;
          if (!user) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.status(400).json('Email already registered on MyEstCalendar'));
        case 5:
          next();
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function checkDuplicateEmail(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.checkDuplicateEmail = checkDuplicateEmail;