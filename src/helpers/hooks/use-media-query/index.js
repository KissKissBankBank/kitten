"use strict";

exports.__esModule = true;
exports.useMedia = void 0;

var _react = require("react");

var _elementHelper = require("../../dom/element-helper");

// https://usehooks.com/useMedia/
const useMedia = _ref => {
  let {
    queries,
    values,
    defaultValue
  } = _ref;
  if (!_elementHelper.domElementHelper.canUseDom()) return defaultValue;
  const mediaQueryLists = queries.map(q => window.matchMedia(q));

  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  const [value, setValue] = (0, _react.useState)(getValue);
  (0, _react.useEffect)(() => {
    const handler = () => setValue(getValue);

    mediaQueryLists.forEach(mql => mql.addListener(handler));
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
  }, []);
  return value;
};

exports.useMedia = useMedia;