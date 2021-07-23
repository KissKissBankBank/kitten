"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;

var _react = _interopRequireDefault(require("react"));

var Context = _react.default.createContext({
  id: 'kkbbAndCoHeaderNav',
  isLogged: false,
  callOnToggle: function callOnToggle() {},
  expandBy: null
});

exports.Context = Context;