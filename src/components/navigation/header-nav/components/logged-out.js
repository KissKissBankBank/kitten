"use strict";

exports.__esModule = true;
exports.LoggedOut = void 0;

var _react = require("react");

var _context = require("./context");

const LoggedOut = _ref => {
  let {
    children
  } = _ref;
  const {
    isLogged
  } = (0, _react.useContext)(_context.Context);
  if (isLogged) return null;
  return children;
};

exports.LoggedOut = LoggedOut;