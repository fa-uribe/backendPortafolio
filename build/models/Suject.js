"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var subjectSchema = new _mongoose.Schema({
  subject_name: String,
  career: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Career"
  }]
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)('Subject', subjectSchema);
exports["default"] = _default;