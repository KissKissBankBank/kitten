"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReactElementsByType = void 0;

var _react = _interopRequireDefault(require("react"));

var getReactElementsByType = function getReactElementsByType(_ref) {
  var children = _ref.children,
      type = _ref.type;
  return _react.default.Children.toArray(children).filter(function (child) {
    return child.type === type;
  });
};

exports.getReactElementsByType = getReactElementsByType;