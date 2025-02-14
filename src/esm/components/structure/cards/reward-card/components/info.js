import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../../typography/text';
export const Info = _ref => {
  let {
    className,
    legend,
    value,
    fullWidth = false,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("p", _extends({
    className: classNames('k-RewardCard__info', 'k-u-size-small', 'k-u-line-height-normal', className, {
      'k-RewardCard__halfDrawer': !fullWidth,
      'k-RewardCard__drawer': fullWidth
    })
  }, props), /*#__PURE__*/React.createElement(Text, {
    className: "k-RewardCard__info__legend",
    weight: "500",
    size: "small",
    lineHeight: "normal"
  }, legend), ' ', /*#__PURE__*/React.createElement(Text, {
    className: "k-RewardCard__info__value",
    weight: "400",
    size: "small",
    lineHeight: "normal"
  }, value));
};