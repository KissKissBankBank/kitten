import _extends from "@babel/runtime/helpers/extends";
import React, { useRef } from 'react';
import { useLazyObserver } from '../helpers/hooks/use-lazy-observer';
export const withLazy = WrappedComponent => props => {
  const lazyComponentRef = useRef(null);
  const isLazyTriggered = useLazyObserver(lazyComponentRef);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: lazyComponentRef
  }), /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, props, {
    isLazyTriggered: isLazyTriggered
  })));
};