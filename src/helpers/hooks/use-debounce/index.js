"use strict";

exports.__esModule = true;
exports.useDebounce = void 0;

var _react = require("react");

const useDebounce = (value, msDelay) => {
  const [debouncedValue, setDebouncedValue] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    const handler = setTimeout(() => setDebouncedValue(value), msDelay);
    return () => clearTimeout(handler);
  }, [value]);
  return debouncedValue;
};

exports.useDebounce = useDebounce;