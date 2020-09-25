import { useRef, useEffect } from 'react';
import isEqual from 'lodash/fp/isEqual';

var useDeepCompareMemoize = function useDeepCompareMemoize(value) {
  var ref = useRef();

  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
};

export var useDeepCompareEffect = function useDeepCompareEffect(callback, dependencies) {
  return useEffect(callback, useDeepCompareMemoize(dependencies));
};