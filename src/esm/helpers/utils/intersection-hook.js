import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from 'react';
import { IntersectionObserverClass } from './intersection-observer';

var useIntersectionObserver = function useIntersectionObserver(_ref) {
  var observedComponentRef = _ref.observedComponentRef,
      options = _ref.options;
  var Observer = new IntersectionObserverClass(options);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      withIntersectionObserver = _useState2[0],
      setIntersectionObserver = _useState2[1];

  useEffect(function () {
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

export default useIntersectionObserver;