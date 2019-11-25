"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _intersectionObserver = require("./intersection-observer");

var useIntersectionObserver = function useIntersectionObserver(_ref) {
  var observedComponentRef = _ref.observedComponentRef,
      options = _ref.options;
  var Observer = new _intersectionObserver.IntersectionObserverClass(options);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      withIntersectionObserver = _useState2[0],
      setIntersectionObserver = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!observedComponentRef || observedComponentRef && !observedComponentRef.current) {
      console.warn('observedComponentRef.current does not exist, useIntersectionObserver will return true');
      setIntersectionObserver(true);
      return;
    }

    Observer.observe(observedComponentRef.current, function () {
      return setIntersectionObserver(true);
    });
    return function () {
      return Observer.unobserve(observedComponentRef.current);
    };
  }, []);
  return withIntersectionObserver;
};

var _default = useIntersectionObserver;
exports.default = _default;