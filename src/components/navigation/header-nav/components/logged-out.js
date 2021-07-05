"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggedOut = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var LoggedOut = function LoggedOut(_ref) {
  var children = _ref.children;

  var _useContext = (0, _react.useContext)(_context.Context),
      isLogged = _useContext.isLogged;

  if (isLogged) return null;
  return children;
};

exports.LoggedOut = LoggedOut;