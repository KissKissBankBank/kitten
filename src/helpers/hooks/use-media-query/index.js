"use strict";

exports.__esModule = true;
exports.useMedia = void 0;

var _react = require("react");

var _elementHelper = require("../../dom/element-helper");

// https://usehooks.com/useMedia/
var useMedia = function useMedia(_ref) {
  var queries = _ref.queries,
      values = _ref.values,
      defaultValue = _ref.defaultValue;
  if (!_elementHelper.domElementHelper.canUseDom()) return defaultValue;
  var mediaQueryLists = queries.map(function (q) {
    return window.matchMedia(q);
  });

  var getValue = function getValue() {
    var index = mediaQueryLists.findIndex(function (mql) {
      return mql.matches;
    });
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  var _useState = (0, _react.useState)(getValue),
      value = _useState[0],
      setValue = _useState[1];

  (0, _react.useEffect)(function () {
    var handler = function handler() {
      return setValue(getValue);
    };

    mediaQueryLists.forEach(function (mql) {
      return mql.addListener(handler);
    });
    return function () {
      return mediaQueryLists.forEach(function (mql) {
        return mql.removeListener(handler);
      });
    };
  }, []);
  return value;
};

exports.useMedia = useMedia;