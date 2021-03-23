import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState, useEffect } from 'react';
export var useDebounce = function useDebounce(value, msDelay) {
  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  useEffect(function () {
    var handler = setTimeout(function () {
      return setDebouncedValue(value);
    }, msDelay);
    return function () {
      return clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
};