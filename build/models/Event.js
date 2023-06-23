"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var eventSchema = new _mongoose.Schema({
  event_name: String,
  description: String,
  event_date: String,
  start_hour: String,
  end_hour: String,
  user: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  subject: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  }]
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)('Event', eventSchema);
exports["default"] = _default;