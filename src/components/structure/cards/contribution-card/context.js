"use strict";

exports.__esModule = true;
exports.Context = void 0;

var _react = require("react");

const Context = /*#__PURE__*/(0, _react.createContext)({
  isInputEmpty: true,
  setEmptyInput: () => {}
});
exports.Context = Context;