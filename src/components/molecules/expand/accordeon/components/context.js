"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;

var _react = require("react");

var Context = (0, _react.createContext)({
  selectedItem: null,
  updateSelectedItem: function updateSelectedItem() {},
  componentId: 'accordeon',
  closeOnClick: false
});
exports.Context = Context;