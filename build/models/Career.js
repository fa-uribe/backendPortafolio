"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var careerSchema = new _mongoose.Schema({
  career_name: String
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)('Career', careerSchema);
exports["default"] = _default;