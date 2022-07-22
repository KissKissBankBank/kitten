import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
export const VisuallyHidden = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classNames(className, 'k-u-a11y-visuallyHidden')
  }, props));
};