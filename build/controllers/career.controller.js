"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editCareer = exports.deleteCareer = exports.createCareer = exports.careerList = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Career = _interopRequireDefault(require("../models/Career"));
var createCareer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var career_name, newCareer, saveCareer;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          career_name = req.body.career_name;
          newCareer = (0, _Career["default"])({
            career_name: career_name
          });
          _context.next = 4;
          return newCareer.save();
        case 4:
          saveCareer = _context.sent;
          return _context.abrupt("return", res.status(200).json("Career saved successfully"));
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createCareer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createCareer = createCareer;
var careerList = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _Career["default"].find();
        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(data));
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function careerList(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.careerList = careerList;
var editCareer = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var career_name, editData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          career_name = req.body.career_name;
          editData = _Career["default"].findByIdAndUpdate(req.params.id, {
            career_name: career_name
          });
          return _context3.abrupt("return", res.status(200).json("Career name edited"));
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function editCareer(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.editCareer = editCareer;
var deleteCareer = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var deleteData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          deleteData = _Career["default"].findByIdAndDelete(req.params.id);
          return _context4.abrupt("return", res.status(200).json("Career deleted"));
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deleteCareer(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteCareer = deleteCareer;