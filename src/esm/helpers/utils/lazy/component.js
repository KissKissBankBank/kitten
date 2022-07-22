import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, useRef, useState } from 'react';
import { LazyObserver } from './observer';
export const LazyLoader = _ref => {
  let {
    children,
    ...others
  } = _ref;
  const [isVisible, setVisible] = useState(false);
  const lazyComponentRef = useRef(null);
  useEffect(() => {
    LazyObserver.observe(lazyComponentRef.current, () => setVisible(true));
    return () => LazyObserver.unobserve(lazyComponentRef.current);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: lazyComponentRef
  }, others), isVisible && children);
};