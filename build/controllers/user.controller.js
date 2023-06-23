"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userList = exports.register = exports.editUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _User = _interopRequireDefault(require("../models/User"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("../config"));
var _Role = _interopRequireDefault(require("../models/Role"));
var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, password, email, userRole, newUser, saveUser, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password, email = _req$body.email;
          _context.next = 3;
          return _Role["default"].find({
            name: "user"
          });
        case 3:
          userRole = _context.sent;
          _context.t0 = _User["default"];
          _context.t1 = username;
          _context.next = 8;
          return _User["default"].encryptPassword(password);
        case 8:
          _context.t2 = _context.sent;
          _context.t3 = email;
          _context.t4 = userRole;
          _context.t5 = {
            username: _context.t1,
            password: _context.t2,
            email: _context.t3,
            roles: _context.t4,
            status: true
          };
          newUser = (0, _context.t0)(_context.t5);
          _context.next = 15;
          return newUser.save();
        case 15:
          saveUser = _context.sent;
          token = _jsonwebtoken["default"].sign({
            id: saveUser._id
          }, _config["default"].SECRET, {
            expiresIn: 86400
          });
          return _context.abrupt("return", res.status(200).json("User has been created"));
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.register = register;
var userList = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _User["default"].find();
        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(data));
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function userList(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.userList = userList;
var editUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, username, password, email, career, editData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password, email = _req$body2.email, career = _req$body2.career;
          editData = _User["default"].findByIdAndUpdate(req.userId, {
            username: username,
            password: password,
            email: email,
            career: career
          });
          return _context3.abrupt("return", res.status(200).json("User data edited"));
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function editUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.editUser = editUser;