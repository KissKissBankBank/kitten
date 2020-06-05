"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _elementHelper = _interopRequireDefault(require("../dom/element-helper"));

var useContinuousIntersectionObserver = function useContinuousIntersectionObserver(_ref) {
  var observedComponentRef = _ref.observedComponentRef,
      _ref$onIntersect = _ref.onIntersect,
      onIntersect = _ref$onIntersect === void 0 ? function () {} : _ref$onIntersect,
      _ref$root = _ref.root,
      root = _ref$root === void 0 ? null : _ref$root,
      _ref$rootMargin = _ref.rootMargin,
      rootMargin = _ref$rootMargin === void 0 ? '0px' : _ref$rootMargin,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 1.0 : _ref$threshold;
  (0, _react.useEffect)(function () {
    if (!observedComponentRef || observedComponentRef && !observedComponentRef.current) {
      console.warn('observedComponentRef.current does not exist, useContinuousIntersectionObserver will return true');
      return;
    }

    var intersectorOptions = {
      root: root && root.current,
      rootMargin: rootMargin,
      threshold: threshold
    };
    var observer = _elementHelper.default.canUseDom() && 'IntersectionObserver' in window ? new IntersectionObserver(onIntersect, intersectorOptions) : null;
    observer && observer.observe(observedComponentRef.current);
    return function () {
      return observer && observer.unobserve(observedComponentRef.current);
    };
  }, []);
};

var _default = useContinuousIntersectionObserver;
exports.default = _default;