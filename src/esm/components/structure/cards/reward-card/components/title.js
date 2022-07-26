import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../../typography/text';
export const Title = _ref => {
  let {
    className,
    textSize,
    truncateText,
    style,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-RewardCard__titleWrapper', 'k-RewardCard__drawer', {
      'k-RewardCard__titleWrapper--truncateText': truncateText
    })
  }, /*#__PURE__*/React.createElement(Text, _extends({
    tag: "h3",
    weight: "500",
    className: classNames('k-RewardCard__title', 'k-u-margin-none', 'k-u-align-center', className, {
      'k-u-clamp': truncateText
    }),
    size: textSize,
    style: {
      '--line-clamp': 2,
      ...style
    }
  }, props)));
};
Title.defaultProps = {
  textSize: 'large',
  truncateText: true
};