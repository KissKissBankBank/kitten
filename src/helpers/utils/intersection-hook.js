"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _intersectionObserver = require("./intersection-observer");

var useIntersectionObserver = function useIntersectionObserver(_ref) {
  var observedComponentRef = _ref.observedComponentRef,
      options = _ref.options;
  var Observer = new _intersectionObserver.IntersectionObserverClass(options);

  var _useState = (0, _react.useState)(false),
      withIntersectionObserver = _useState[0],
      setIntersectionObserver = _useState[1];

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