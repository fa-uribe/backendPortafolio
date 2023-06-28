"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.signIn = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _User = _interopRequireDefault(require("../models/User"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("../config"));
var _Role = _interopRequireDefault(require("../models/Role"));
var dotenv = _interopRequireWildcard(require("dotenv"));
var _Career = _interopRequireDefault(require("../models/Career"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
dotenv.config();
var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, password, email, career, role, careerFind, newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, username = _req$body.username, password = _req$body.password, email = _req$body.email, career = _req$body.career;
          _context.next = 4;
          return _Role["default"].find({
            name: "user"
          });
        case 4:
          role = _context.sent;
          _context.next = 7;
          return _Career["default"].find({
            career_name: career
          });
        case 7:
          careerFind = _context.sent;
          _context.t0 = _User["default"];
          _context.t1 = username;
          _context.next = 12;
          return _User["default"].encryptPassword(password);
        case 12:
          _context.t2 = _context.sent;
          _context.t3 = email;
          _context.t4 = role;
          _context.t5 = careerFind;
          _context.t6 = {
            username: _context.t1,
            password: _context.t2,
            email: _context.t3,
            roles: _context.t4,
            status: true,
            career: _context.t5
          };
          newUser = (0, _context.t0)(_context.t6);
          if (newUser) {
            newUser.save();
            res.status(200).json("Welcome " + username + ", you have successfully registered on MyEstCalendar, you can now Log In");
          } else {
            res.status(400).json("We couldn't register your user");
          }
          _context.next = 24;
          break;
        case 21:
          _context.prev = 21;
          _context.t7 = _context["catch"](0);
          res.status(400).json(_context.t7);
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.signUp = signUp;
var signIn = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userFound, userData, rl, rol, matchPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _User["default"].findOne({
            email: req.body.email,
            status: true
          }).populate("roles");
        case 2:
          userFound = _context2.sent;
          _context2.next = 5;
          return _User["default"].find({
            email: req.body.email,
            status: true
          });
        case 5:
          userData = _context2.sent;
          rl = userData.map(function (rol) {
            return rol.roles;
          });
          rol = rl.toString(rl);
          if (userFound) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            Error: "User not found"
          }));
        case 10:
          _context2.next = 12;
          return _User["default"].comparePassword(req.body.password, userFound.password);
        case 12:
          matchPassword = _context2.sent;
          if (matchPassword) {
            _context2.next = 15;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            token: null,
            Error: "Invalid password"
          }));
        case 15:
          token = _jsonwebtoken["default"].sign({
            id: userFound._id
          }, _config["default"].SECRET, {
            expiresIn: 100000000
          });
          res.json({
            token: token,
            userData: userData
          });
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.signIn = signIn;