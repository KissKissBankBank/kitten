"use strict";

exports.__esModule = true;
exports.useIntersectionObserver = void 0;

var _react = require("react");

var _intersectionObserver = require("../../utils/intersection-observer");

const useIntersectionObserver = _ref => {
  let {
    observedComponentRef,
    options
  } = _ref;
  const Observer = new _intersectionObserver.IntersectionObserverClass(options);
  const [withIntersectionObserver, setIntersectionObserver] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (!observedComponentRef || observedComponentRef && !observedComponentRef.current) {
      console.warn('observedComponentRef.current does not exist, useIntersectionObserver will return true');
      setIntersectionObserver(true);
      return;
    }

    Observer.observe(observedComponentRef.current, () => setIntersectionObserver(true));
    return () => Observer.unobserve(observedComponentRef.current);
  }, []);
  return withIntersectionObserver;
};

exports.useIntersectionObserver = useIntersectionObserver;