import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children"];
import React, { useEffect, useRef, useState } from 'react';
import LazyObserver from './lazy-observer';
export var LazyLoader = function LazyLoader(_ref) {
  var children = _ref.children,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(false),
      isVisible = _useState[0],
      setVisible = _useState[1];

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