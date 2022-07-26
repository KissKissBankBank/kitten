import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../../typography/text';
export const Amount = _ref => {
  let {
    className,
    suffix,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("p", _extends({
    className: classNames('k-RewardCard__drawer', 'k-RewardCard__amount__wrapper', 'k-u-align-center', className)
  }, props), /*#__PURE__*/React.createElement(Text, {
    weight: "700",
    className: "k-RewardCard__amount k-u-block"
  }, children), suffix && /*#__PURE__*/React.createElement(Text, {
    weight: "500",
    transform: "uppercase",
    letterSpacing: "10%",
    className: "k-RewardCard__amount__suffix k-u-block"
  }, suffix));
};