import { useRef, useCallback, useEffect, useState } from 'react';
import { domElementHelper } from '../../../../../helpers/dom/element-helper'; // https://gist.github.com/DominicTobias/c8579667e8a8bd7817c1b4d5b274eb4c

export var useResizeObserver = function useResizeObserver() {
  if (!domElementHelper.canUseDom() && !'ResizeObserver' in window) {
    return {};
  }

  var _useState = useState('large'),
      size = _useState[0],
      setSize = _useState[1];

  var resizeObserver = useRef(null);
  var onResize = useCallback(function (entries) {
    var width = entries[0].contentRect.width;

    if (width >= 870) {
      setSize('large');
    } else if (width < 870 && width >= 760) {
      setSize('medium');
    } else if (width < 760 && width >= 700) {
      setSize('tablet');
    } else if (width < 700 && width >= 600) {
      setSize('small');
    } else if (width < 600) {
      setSize('mobile');
    }
  }, []);
  var ref = useCallback(function (node) {
    if (node !== null) {
      if (resizeObserver != null && resizeObserver.current) {
        resizeObserver.current.disconnect();
      }

      resizeObserver.current = new ResizeObserver(onResize);
      resizeObserver.current.observe(node);
    }
  }, [onResize]);
  useEffect(function () {
    return function () {
      if (resizeObserver != null && resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
    };
  }, []);
  return {
    ref: ref,
    size: size
  };
};