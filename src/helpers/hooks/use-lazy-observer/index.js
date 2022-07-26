"use strict";

exports.__esModule = true;
exports.useLazyObserver = void 0;

var _react = require("react");

var _observer = require("../../utils/lazy/observer");

const useLazyObserver = lazyComponentRef => {
  const [withLazyObserver, setLazyObserver] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const hasNoRef = !(lazyComponentRef != null && lazyComponentRef.current);

    if (hasNoRef) {
      console.warn('lazyComponentRef.current does not exist, useLazyObserver will return true');
      setLazyObserver(true);
      return;
    }

    _observer.LazyObserver.observe(lazyComponentRef.current, () => setLazyObserver(true));

    return () => {
      if (hasNoRef) return;

      _observer.LazyObserver.unobserve(lazyComponentRef.current);
    };
  }, []);
  return withLazyObserver;
};

exports.useLazyObserver = useLazyObserver;