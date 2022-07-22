import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import { Button as KittenButton } from '../../../../action/button';
export const Button = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(KittenButton, _extends({
    modifier: "helium",
    fit: "content",
    className: classNames('k-RewardCard__button', 'k-RewardCard__drawer', className)
  }, props));
};