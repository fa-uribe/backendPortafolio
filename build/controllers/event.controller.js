"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventsDisplay = exports.eventEdit = exports.eventDisplay = exports.eventDelete = exports.eventCreate = exports.dailyEvents = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Event = _interopRequireDefault(require("../models/Event.js"));
var _User = _interopRequireDefault(require("../models/User.js"));
var _Suject = _interopRequireDefault(require("../models/Suject.js"));
var _moment = _interopRequireDefault(require("moment/moment.js"));
_moment["default"].locale();
var eventCreate = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user, _req$body, event_name, description, event_date, start_hour, end_hour, subject, newEvent, saveEvent;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _User["default"].findById(req.userId);
        case 2:
          user = _context.sent;
          _req$body = req.body, event_name = _req$body.event_name, description = _req$body.description, event_date = _req$body.event_date, start_hour = _req$body.start_hour, end_hour = _req$body.end_hour, subject = _req$body.subject;
          newEvent = (0, _Event["default"])({
            event_name: event_name,
            description: description,
            event_date: event_date,
            start_hour: start_hour,
            end_hour: end_hour,
            user: user,
            subject: subject
          });
          _context.next = 7;
          return newEvent.save();
        case 7:
          saveEvent = _context.sent;
          return _context.abrupt("return", res.status(200).json("Event created"));
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function eventCreate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.eventCreate = eventCreate;
var eventEdit = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, event_name, description, event_date, start_hour, end_hour, editData;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, event_name = _req$body2.event_name, description = _req$body2.description, event_date = _req$body2.event_date, start_hour = _req$body2.start_hour, end_hour = _req$body2.end_hour;
          _context2.next = 3;
          return _Event["default"].findByIdAndUpdate(req.params.id, {
            event_name: event_name,
            description: description,
            event_date: event_date,
            start_hour: start_hour,
            end_hour: end_hour
          });
        case 3:
          editData = _context2.sent;
          return _context2.abrupt("return", res.status(200).json("Event edited"));
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function eventEdit(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.eventEdit = eventEdit;
var eventsDisplay = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var currentUser, events;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _User["default"].findById(req.userId);
        case 2:
          currentUser = _context3.sent;
          _context3.next = 5;
          return _Event["default"].find({
            user: currentUser
          });
        case 5:
          events = _context3.sent;
          return _context3.abrupt("return", res.status(200).json(events));
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function eventsDisplay(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.eventsDisplay = eventsDisplay;
var eventDisplay = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var event;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _Event["default"].findById(req.params.id);
        case 2:
          event = _context4.sent;
          return _context4.abrupt("return", res.status(200).json(event));
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function eventDisplay(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.eventDisplay = eventDisplay;
var eventDelete = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var eventData;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _Event["default"].findByIdAndDelete(req.params.id);
        case 2:
          eventData = _context5.sent;
          return _context5.abrupt("return", res.status(200).json("Event deleted"));
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function eventDelete(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.eventDelete = eventDelete;
var dailyEvents = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var currentUser, eventsData, eventsDisplay;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _User["default"].findById(req.userId);
        case 2:
          currentUser = _context6.sent;
          _context6.next = 5;
          return _Event["default"].find({
            user: currentUser
          });
        case 5:
          eventsData = _context6.sent;
          eventsDisplay = eventsData.filter(function (event) {
            var day = req.params.day;
            var event_date = (0, _moment["default"])(event.event_date).format("YYYY-MM-DD");
            return event_date === day;
          });
          return _context6.abrupt("return", res.status(200).json(eventsDisplay));
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function dailyEvents(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.dailyEvents = dailyEvents;