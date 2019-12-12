"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = void 0;

var _arguments = arguments,
    _this = void 0;

var debounce = function debounce(fn, msDelay) {
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

exports.debounce = debounce;