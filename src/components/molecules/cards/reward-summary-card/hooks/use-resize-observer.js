"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResizeObserver = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _elementHelper = require("../../../../../helpers/dom/element-helper");

// https://gist.github.com/DominicTobias/c8579667e8a8bd7817c1b4d5b274eb4c
var useResizeObserver = function useResizeObserver() {
  if (!_elementHelper.domElementHelper.canUseDom() && !'ResizeObserver' in window) {
    return {};
  }

  var _useState = (0, _react.useState)('large'),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  var resizeObserver = (0, _react.useRef)(null);
  var onResize = (0, _react.useCallback)(function (entries) {
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
  var ref = (0, _react.useCallback)(function (node) {
    if (node !== null) {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }

      resizeObserver.current = new ResizeObserver(onResize);
      resizeObserver.current.observe(node);
    }
  }, [onResize]);
  (0, _react.useEffect)(function () {
    return function () {
      resizeObserver.current.disconnect();
    };
  }, []);
  return {
    ref: ref,
    size: size
  };
};

exports.useResizeObserver = useResizeObserver;