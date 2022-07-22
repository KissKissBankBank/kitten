"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useDeepCompareEffect = void 0;

var _react = require("react");

var _isEqual = _interopRequireDefault(require("lodash/fp/isEqual"));

const useDeepCompareMemoize = value => {
  const ref = (0, _react.useRef)();

  if (!(0, _isEqual.default)(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
};

const useDeepCompareEffect = (callback, dependencies) => (0, _react.useEffect)(callback, useDeepCompareMemoize(dependencies));

exports.useDeepCompareEffect = useDeepCompareEffect;