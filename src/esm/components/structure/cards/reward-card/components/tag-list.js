import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
export const TagList = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classNames('k-RewardCard__tagList', 'k-RewardCard__drawer', className)
  }, props));
};