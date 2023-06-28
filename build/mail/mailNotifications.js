"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var User = require('../models/User.js');
var nodemailer = require('nodemailer');
exports.sendEventNotification = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(evento) {
    var transporter, eventUser, mailOptions;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            // true for 465, false for other ports
            auth: {
              user: "no.reply.estcalendar@gmail.com",
              pass: "mtvqyncfiolebfcq"
            }
          });
          _context.next = 3;
          return User.findById(evento.user[0]);
        case 3:
          eventUser = _context.sent;
          mailOptions = {
            from: 'no.reply.estcalendar@gmail.com',
            to: eventUser.email,
            subject: 'Recordatorio de evento',
            text: "Tu evento \"".concat(evento.event_name, "\" comenzar\xE1 pronto. \xA1No te olvides!")
          };
          _context.prev = 5;
          _context.next = 8;
          return transporter.sendMail(mailOptions);
        case 8:
          console.log('Correo electrónico enviado a', eventUser.email);
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](5);
          console.error('Error al enviar el correo electrónico:', _context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[5, 11]]);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();