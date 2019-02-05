"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;

var _react = _interopRequireDefault(require("react"));

var Context = _react.default.createContext({
  selectedItem: null,
  updateSelectedItem: function updateSelectedItem() {},
  isAnimated: true,
  componentId: 'accordeon'
});

exports.Context = Context;