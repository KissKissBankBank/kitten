import React from 'react';
import classNames from 'classnames';
export var Hidden = function Hidden(_ref) {
  var min = _ref.min,
      max = _ref.max,
      children = _ref.children;
  var hiddenMin = min ? "k-u-hidden@".concat(min, "-up--important") : '';
  var hiddenMax = max ? "k-u-hidden@".concat(max, "-down--important") : '';
  return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, function (child) {
    return React.cloneElement(child, {
      className: classNames(hiddenMin, hiddenMax)
    });
  }));
};