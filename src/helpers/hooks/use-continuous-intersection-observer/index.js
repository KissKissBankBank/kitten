"use strict";

exports.__esModule = true;
exports.useContinuousIntersectionObserver = void 0;

var _react = require("react");

var _elementHelper = require("../../dom/element-helper");

const useContinuousIntersectionObserver = _ref => {
  let {
    observedComponentRef,
    onIntersect = () => {},
    root = null,
    rootMargin = '0px',
    threshold = 1.0
  } = _ref;
  (0, _react.useEffect)(() => {
    if (!observedComponentRef || observedComponentRef && !observedComponentRef.current) {
      console.warn('observedComponentRef.current does not exist, useContinuousIntersectionObserver will return true');
      return;
    }

    const intersectorOptions = {
      root: root && root.current,
      rootMargin,
      threshold
    };
    const observer = _elementHelper.domElementHelper.canUseDom() && 'IntersectionObserver' in window ? new IntersectionObserver(onIntersect, intersectorOptions) : null;
    observer && observer.observe(observedComponentRef.current);
    return () => observer && observer.unobserve(observedComponentRef.current);
  }, []);
};

exports.useContinuousIntersectionObserver = useContinuousIntersectionObserver;