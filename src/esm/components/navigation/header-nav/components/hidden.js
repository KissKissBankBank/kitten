import React from 'react';
import classNames from 'classnames';
export const Hidden = _ref => {
  let {
    min,
    max,
    children
  } = _ref;
  const hiddenMin = min ? "k-u-hidden@" + min + "-up" : '';
  const hiddenMax = max ? "k-u-hidden@" + max + "-down" : '';
  return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, child => /*#__PURE__*/React.cloneElement(child, {
    className: classNames(hiddenMin, hiddenMax)
  })));
};