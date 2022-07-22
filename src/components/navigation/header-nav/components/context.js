"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Context = void 0;

var _react = _interopRequireDefault(require("react"));

const Context = /*#__PURE__*/_react.default.createContext({
  id: 'kkbbAndCoHeaderNav',
  isLogged: false,
  callOnToggle: () => {},
  expandBy: null
});

exports.Context = Context;