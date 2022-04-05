"use strict";

exports.__esModule = true;
exports.useDebounce = void 0;

var _react = require("react");

var useDebounce = function useDebounce(value, msDelay) {
  var _useState = (0, _react.useState)(value),
      debouncedValue = _useState[0],
      setDebouncedValue = _useState[1];

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