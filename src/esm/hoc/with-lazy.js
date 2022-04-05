import _extends from "@babel/runtime/helpers/extends";
import React, { useRef } from 'react';
import { useLazyObserver } from '../helpers/hooks/use-lazy-observer';
export var withLazy = function withLazy(WrappedComponent) {
  return function (props) {
    var lazyComponentRef = useRef(null);
    var isLazyTriggered = useLazyObserver(lazyComponentRef);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      ref: lazyComponentRef
    }), /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, props, {
      isLazyTriggered: isLazyTriggered
    })));
  };
};