"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeepCompareEffect = void 0;

var _react = require("react");

var _isEqual = _interopRequireDefault(require("lodash/fp/isEqual"));

var useDeepCompareMemoize = function useDeepCompareMemoize(value) {
  var ref = (0, _react.useRef)();

  if (!(0, _isEqual.default)(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
};

var useDeepCompareEffect = function useDeepCompareEffect(callback, dependencies) {
  return (0, _react.useEffect)(callback, useDeepCompareMemoize(dependencies));
};

exports.useDeepCompareEffect = useDeepCompareEffect;