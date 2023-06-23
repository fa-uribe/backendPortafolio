"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
require("./database");
_app["default"].set('port', process.env.PORT || 8080);
_app["default"].listen(_app["default"].get('port'), function () {
  console.log('Server running on port: ', _app["default"].get('port'));
});