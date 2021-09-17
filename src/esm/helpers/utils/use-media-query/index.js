import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.find-index.js";
import "core-js/modules/web.dom-collections.for-each.js";
import { useState, useEffect } from 'react';
import domElementHelper from '../../dom/element-helper'; // https://usehooks.com/useMedia/

export var useMedia = function useMedia(_ref) {
  var queries = _ref.queries,
      values = _ref.values,
      defaultValue = _ref.defaultValue;
  if (!domElementHelper.canUseDom()) return defaultValue;
  var mediaQueryLists = queries.map(function (q) {
    return window.matchMedia(q);
  });

  var getValue = function getValue() {
    var index = mediaQueryLists.findIndex(function (mql) {
      return mql.matches;
    });
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  var _useState = useState(getValue),
      value = _useState[0],
      setValue = _useState[1];

  useEffect(function () {
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