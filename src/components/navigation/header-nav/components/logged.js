"use strict";

exports.__esModule = true;
exports.Logged = void 0;

var _react = require("react");

var _context = require("./context");

var Logged = function Logged(_ref) {
  var children = _ref.children;

  var _useContext = (0, _react.useContext)(_context.Context),
      isLogged = _useContext.isLogged;

  if (!isLogged) return null;
  return children;
};

exports.Logged = Logged;