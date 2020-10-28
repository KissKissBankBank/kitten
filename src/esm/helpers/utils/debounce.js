var _arguments = arguments,
    _this = this;

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