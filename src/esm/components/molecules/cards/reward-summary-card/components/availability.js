import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Text } from '../../../../../components/atoms/typography/text';
import classNames from 'classnames';
export var Availability = function Availability(props) {
  return /*#__PURE__*/React.createElement(Text, _extends({
    color: "font1",
    weight: "light",
    size: "tiny"
  }, props, {
    className: classNames('k-RewardSummaryCard__availability', props.className, 'k-u-hidden@xs-down')
  }));
};