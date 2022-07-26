"use strict";

exports.__esModule = true;
exports.useWindowWidth = void 0;

var _react = require("react");

var _elementHelper = require("../../dom/element-helper");

const getWidth = () => {
  if (!_elementHelper.domElementHelper.canUseDom()) return 0;
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

const useWindowWidth = () => {
  const [width, setWidth] = (0, _react.useState)(getWidth());
  (0, _react.useEffect)(() => {
    let timeoutId = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };

    _elementHelper.domElementHelper.canUseDom() && window.addEventListener('resize', handleResize);
    return () => {
      _elementHelper.domElementHelper.canUseDom() && window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
};

exports.useWindowWidth = useWindowWidth;