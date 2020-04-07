"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggedOut = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = require("./context");

var LoggedOut = function LoggedOut(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref2) {
    var isLogged = _ref2.isLogged;
    return !isLogged ? children : null;
  });
};

exports.LoggedOut = LoggedOut;