"use strict";

exports.__esModule = true;
exports.useLazyObserver = void 0;

var _react = require("react");

var _observer = require("../../utils/lazy/observer");

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

    _observer.LazyObserver.observe(lazyComponentRef.current, function () {
      return setLazyObserver(true);
    });

    return function () {
      if (hasNoRef) return;

      _observer.LazyObserver.unobserve(lazyComponentRef.current);
    };
  }, []);
  return withLazyObserver;
};

exports.useLazyObserver = useLazyObserver;