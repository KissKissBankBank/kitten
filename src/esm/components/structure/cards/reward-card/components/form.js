import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
export const Form = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-RewardCard__formWrapper', 'k-RewardCard__drawer', className)
  }, props));
};