"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _lazyObserver = _interopRequireDefault(require("./lazy-observer"));

var useLazyObserver = function useLazyObserver(lazyComponentRef) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      withLazyObserver = _useState2[0],
      setLazyObserver = _useState2[1];

  var hasNoRef = !(lazyComponentRef === null || lazyComponentRef === void 0 ? void 0 : lazyComponentRef.current);
  (0, _react.useEffect)(function () {
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