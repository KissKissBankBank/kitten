import { useEffect, useState } from 'react';
import { LazyObserver } from '../../utils/lazy/observer';
export var useLazyObserver = function useLazyObserver(lazyComponentRef) {
  var _useState = useState(false),
      withLazyObserver = _useState[0],
      setLazyObserver = _useState[1];

  useEffect(function () {
    var hasNoRef = !(lazyComponentRef != null && lazyComponentRef.current);

    if (hasNoRef) {
      console.warn('lazyComponentRef.current does not exist, useLazyObserver will return true');
      setLazyObserver(true);
      return;
    }

    LazyObserver.observe(lazyComponentRef.current, function () {
      return setLazyObserver(true);
    });
    return function () {
      if (hasNoRef) return;
      LazyObserver.unobserve(lazyComponentRef.current);
    };
  }, []);
  return withLazyObserver;
};