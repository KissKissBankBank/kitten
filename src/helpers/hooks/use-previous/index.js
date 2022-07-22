"use strict";

exports.__esModule = true;
exports.usePrevious = void 0;

var _react = require("react");

// https://usehooks.com/usePrevious/
// Hook
const usePrevious = value => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = (0, _react.useRef)(); // Store current value in ref

  (0, _react.useEffect)(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
};

exports.usePrevious = usePrevious;