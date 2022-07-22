import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
export const Image = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-ContributionCard__imageWrapper', className)
  }));
};