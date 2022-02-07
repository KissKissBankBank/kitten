import React from 'react';
import classNames from 'classnames';
export var Hidden = function Hidden(_ref) {
  var min = _ref.min,
      max = _ref.max,
      children = _ref.children;
  var hiddenMin = min ? "k-u-hidden@" + min + "-up" : '';
  var hiddenMax = max ? "k-u-hidden@" + max + "-down" : '';
  return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, function (child) {
    return /*#__PURE__*/React.cloneElement(child, {
      className: classNames(hiddenMin, hiddenMax)
    });
  }));
};