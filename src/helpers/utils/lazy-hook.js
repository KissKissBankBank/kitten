"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _lazyObserver = _interopRequireDefault(require("./lazy-observer"));

var useLazyObserver = function useLazyObserver(lazyComponentRef) {
  var _useState = (0, _react.useState)(false),
      withLazyObserver = _useState[0],
      setLazyObserver = _useState[1];

  (0, _react.useEffect)(function () {
    var hasNoRef = !(lazyComponentRef != null && lazyComponentRef.current);

    if (hasNoRef) {
      console.warn('lazyComponentRef.current does not exist, useLazyObserver will return true');
      setLazyObserver(true);
      return;
    }

    _lazyObserver.default.observe(lazyComponentRef.current, function () {
      return setLazyObserver(true);
    });

    return function () {
      if (hasNoRef) return;

      _lazyObserver.default.unobserve(lazyComponentRef.current);
    };
  }, []);
  return withLazyObserver;
};

var _default = useLazyObserver;
exports.default = _default;