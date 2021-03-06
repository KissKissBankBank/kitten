"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDebounce = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var useDebounce = function useDebounce(value, msDelay) {
  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  (0, _react.useEffect)(function () {
    var handler = setTimeout(function () {
      return setDebouncedValue(value);
    }, msDelay);
    return function () {
      return clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
};

exports.useDebounce = useDebounce;