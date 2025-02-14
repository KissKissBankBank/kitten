import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../../typography/text';
export const Amount = props => {
  return /*#__PURE__*/React.createElement(Text, _extends({
    color: "font1",
    weight: "700",
    size: "huge"
  }, props, {
    className: classNames('k-ContributionCard__amount', props.className)
  }));
};