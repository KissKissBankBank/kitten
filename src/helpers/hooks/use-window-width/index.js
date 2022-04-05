"use strict";

exports.__esModule = true;
exports.useWindowWidth = void 0;

var _react = require("react");

var _elementHelper = require("../../dom/element-helper");

var getWidth = function getWidth() {
  if (!_elementHelper.domElementHelper.canUseDom()) return 0;
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

var useWindowWidth = function useWindowWidth() {
  var _useState = (0, _react.useState)(getWidth()),
      width = _useState[0],
      setWidth = _useState[1];

  (0, _react.useEffect)(function () {
    var timeoutId = null;

    var handleResize = function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        return setWidth(getWidth());
      }, 150);
    };

    _elementHelper.domElementHelper.canUseDom() && window.addEventListener('resize', handleResize);
    return function () {
      _elementHelper.domElementHelper.canUseDom() && window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
};

exports.useWindowWidth = useWindowWidth;