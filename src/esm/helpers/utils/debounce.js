import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _arguments = arguments,
    _this = this;

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
export var debounce = function debounce(fn, msDelay) {
  var inDebounce;
  return function () {
    var context = _this;
    var args = _arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(function () {
      return fn.apply(context, args);
    }, msDelay);
  };
};