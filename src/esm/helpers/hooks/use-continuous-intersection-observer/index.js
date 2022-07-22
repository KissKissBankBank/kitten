import { useEffect } from 'react';
import { domElementHelper } from '../../dom/element-helper';
export const useContinuousIntersectionObserver = _ref => {
  let {
    observedComponentRef,
    onIntersect = () => {},
    root = null,
    rootMargin = '0px',
    threshold = 1.0
  } = _ref;
  useEffect(() => {
    if (!observedComponentRef || observedComponentRef && !observedComponentRef.current) {
      console.warn('observedComponentRef.current does not exist, useContinuousIntersectionObserver will return true');
      return;
    }

    const intersectorOptions = {
      root: root && root.current,
      rootMargin,
      threshold
    };
    const observer = domElementHelper.canUseDom() && 'IntersectionObserver' in window ? new IntersectionObserver(onIntersect, intersectorOptions) : null;
    observer && observer.observe(observedComponentRef.current);
    return () => observer && observer.unobserve(observedComponentRef.current);
  }, []);
};