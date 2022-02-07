"use strict";

exports.__esModule = true;
exports.Context = void 0;

var _react = require("react");

var Context = /*#__PURE__*/(0, _react.createContext)({
  selectedItem: null,
  updateSelectedItem: function updateSelectedItem() {},
  componentId: 'accordeon',
  closeOnClick: false
});
exports.Context = Context;