import { useEffect, useState } from 'react';
import { IntersectionObserverClass } from '../../utils/intersection-observer';
export var useIntersectionObserver = function useIntersectionObserver(_ref) {
  var observedComponentRef = _ref.observedComponentRef,
      options = _ref.options;
  var Observer = new IntersectionObserverClass(options);

  var _useState = useState(false),
      withIntersectionObserver = _useState[0],
      setIntersectionObserver = _useState[1];

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