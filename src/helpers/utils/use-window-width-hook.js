"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowWidth = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _elementHelper = _interopRequireDefault(require("../dom/element-helper"));

var getWidth = function getWidth() {
  if (!_elementHelper.default.canUseDom()) return 0;
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

var useWindowWidth = function useWindowWidth() {
  var _useState = (0, _react.useState)(getWidth()),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  (0, _react.useEffect)(function () {
    var timeoutId = null;

    var handleResize = function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        return setWidth(getWidth());
      }, 150);
    };

    _elementHelper.default.canUseDom() && window.addEventListener('resize', handleResize);
    return function () {
      _elementHelper.default.canUseDom() && window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
};

exports.useWindowWidth = useWindowWidth;