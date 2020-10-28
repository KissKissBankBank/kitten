import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from 'react';
import LazyObserver from './lazy-observer';

var useLazyObserver = function useLazyObserver(lazyComponentRef) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      withLazyObserver = _useState2[0],
      setLazyObserver = _useState2[1];

  useEffect(function () {
    if (!lazyComponentRef || lazyComponentRef && !lazyComponentRef.current) {
      console.warn('lazyComponentRef.current does not exist, useLazyObserver will return true');
      setLazyObserver(true);
      return;
    }

    LazyObserver.observe(lazyComponentRef.current, function () {
      return setLazyObserver(true);
    });
    return function () {
      return LazyObserver.unobserve(lazyComponentRef.current);
    };
  }, []);
  return withLazyObserver;
};

export default useLazyObserver;