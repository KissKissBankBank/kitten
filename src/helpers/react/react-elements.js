"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReactElementsWithoutTypeArray = exports.getReactElementsByTypeArray = exports.getReactElementsWithoutType = exports.getReactElementsByType = void 0;

var _react = _interopRequireDefault(require("react"));

var _isFunction = _interopRequireDefault(require("lodash/fp/isFunction"));

var _filter = _interopRequireDefault(require("lodash/fp/filter"));

var getReactElementsByType = function getReactElementsByType(_ref) {
  var children = _ref.children,
      type = _ref.type;
  return _react.default.Children.toArray(children).filter(function (child) {
    return child.type === type;
  });
};

exports.getReactElementsByType = getReactElementsByType;

var getReactElementsWithoutType = function getReactElementsWithoutType(_ref2) {
  var children = _ref2.children,
      type = _ref2.type;
  return _react.default.Children.toArray(children).filter(function (child) {
    return child.type !== type;
  });
};

exports.getReactElementsWithoutType = getReactElementsWithoutType;

var getReactElementsByTypeArray = function getReactElementsByTypeArray(_ref3) {
  var children = _ref3.children,
      typeArray = _ref3.typeArray;
  return (0, _filter.default)(function (child) {
    return typeArray.includes(child.type) || (0, _isFunction.default)(child);
  })(children);
};

exports.getReactElementsByTypeArray = getReactElementsByTypeArray;

var getReactElementsWithoutTypeArray = function getReactElementsWithoutTypeArray(_ref4) {
  var children = _ref4.children,
      typeArray = _ref4.typeArray;
  return (0, _filter.default)(function (child) {
    return !typeArray.includes(child.type) || (0, _isFunction.default)(child);
  })(children);
};

exports.getReactElementsWithoutTypeArray = getReactElementsWithoutTypeArray;