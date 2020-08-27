import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from 'react';
import domElementHelper from '../dom/element-helper';

var getWidth = function getWidth() {
  if (!domElementHelper.canUseDom()) return 0;
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

export var useWindowWidth = function useWindowWidth() {
  var _useState = useState(getWidth()),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  useEffect(function () {
    var timeoutId = null;

    var handleResize = function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        return setWidth(getWidth());
      }, 150);
    };

    domElementHelper.canUseDom() && window.addEventListener('resize', handleResize);
    return function () {
      domElementHelper.canUseDom() && window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
};