import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, useRef, useState } from 'react';
import LazyObserver from './lazy-observer';
export var LazyLoader = function LazyLoader(_ref) {
  var children = _ref.children,
      others = _objectWithoutProperties(_ref, ["children"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setVisible = _useState2[1];

  var lazyComponentRef = useRef(null);
  useEffect(function () {
    LazyObserver.observe(lazyComponentRef.current, function () {
      return setVisible(true);
    });
    return function () {
      return LazyObserver.unobserve(lazyComponentRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: lazyComponentRef
  }, others), isVisible && children);
};