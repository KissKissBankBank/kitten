"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getReactElementsWithoutTypeArray = exports.getReactElementsWithoutType = exports.getReactElementsByTypeArray = exports.getReactElementsByType = void 0;

var _react = _interopRequireDefault(require("react"));

var _isFunction = _interopRequireDefault(require("lodash/fp/isFunction"));

var _filter = _interopRequireDefault(require("lodash/fp/filter"));

const getReactElementsByType = _ref => {
  let {
    children,
    type
  } = _ref;
  return _react.default.Children.toArray(children).filter(child => child && child.type === type);
};

exports.getReactElementsByType = getReactElementsByType;

const getReactElementsWithoutType = _ref2 => {
  let {
    children,
    type
  } = _ref2;
  return _react.default.Children.toArray(children).filter(child => child && child.type !== type);
};

exports.getReactElementsWithoutType = getReactElementsWithoutType;

const getReactElementsByTypeArray = _ref3 => {
  let {
    children,
    typeArray
  } = _ref3;
  return (0, _filter.default)(child => child && (typeArray.includes(child.type) || (0, _isFunction.default)(child)))(children);
};

exports.getReactElementsByTypeArray = getReactElementsByTypeArray;

const getReactElementsWithoutTypeArray = _ref4 => {
  let {
    children,
    typeArray
  } = _ref4;
  return (0, _filter.default)(child => child && (!typeArray.includes(child.type) || (0, _isFunction.default)(child)))(children);
};

exports.getReactElementsWithoutTypeArray = getReactElementsWithoutTypeArray;