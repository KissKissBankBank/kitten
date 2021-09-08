import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useRef, useCallback, useEffect, useState } from 'react';
import { domElementHelper } from '../../../../../helpers/dom/element-helper'; // https://gist.github.com/DominicTobias/c8579667e8a8bd7817c1b4d5b274eb4c

export var useResizeObserver = function useResizeObserver() {
  if (!domElementHelper.canUseDom() && !'ResizeObserver' in window) {
    return {};
  }

  var _useState = useState('large'),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  var resizeObserver = useRef(null);
  var onResize = useCallback(function (entries) {
    var width = entries[0].contentRect.width;

    if (width >= 870) {
      setSize('large');
    } else if (width < 870 && width >= 720) {
      setSize('medium');
    } else if (width < 720 && width >= 600) {
      setSize('small');
    } else if (width < 600) {
      setSize('mobile');
    }
  }, []);
  var ref = useCallback(function (node) {
    if (node !== null) {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }

      resizeObserver.current = new ResizeObserver(onResize);
      resizeObserver.current.observe(node);
    }
  }, [onResize]);
  useEffect(function () {
    return function () {
      resizeObserver.current.disconnect();
    };
  }, []);
  return {
    ref: ref,
    size: size
  };
};