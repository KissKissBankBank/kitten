"use strict";

exports.__esModule = true;
exports.useResizeObserver = void 0;

var _react = require("react");

var _elementHelper = require("../../../../../helpers/dom/element-helper");

// https://gist.github.com/DominicTobias/c8579667e8a8bd7817c1b4d5b274eb4c
var useResizeObserver = function useResizeObserver() {
  if (!_elementHelper.domElementHelper.canUseDom() && !'ResizeObserver' in window) {
    return {};
  }

  var _useState = (0, _react.useState)('large'),
      size = _useState[0],
      setSize = _useState[1];

  var resizeObserver = (0, _react.useRef)(null);
  var onResize = (0, _react.useCallback)(function (entries) {
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
  var ref = (0, _react.useCallback)(function (node) {
    if (node !== null) {
      if (resizeObserver != null && resizeObserver.current) {
        resizeObserver.current.disconnect();
      }

      resizeObserver.current = new ResizeObserver(onResize);
      resizeObserver.current.observe(node);
    }
  }, [onResize]);
  (0, _react.useEffect)(function () {
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

exports.useResizeObserver = useResizeObserver;