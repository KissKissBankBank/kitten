import { useState, useEffect } from 'react';
export var useDebounce = function useDebounce(value, msDelay) {
  var _useState = useState(value),
      debouncedValue = _useState[0],
      setDebouncedValue = _useState[1];

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