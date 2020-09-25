import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import classNames from 'classnames';
import { IconBadge } from '../../../../components/notifications/icon-badge';
import { CheckedIcon } from '../../../../components/icons/checked-icon';
export var RewardCardCheckedIconLine = function RewardCardCheckedIconLine(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-RewardCard__checkedIconLine', props.className)
  }), /*#__PURE__*/React.createElement(IconBadge, {
    valid: true,
    className: "k-RewardCard__iconBadge"
  }, /*#__PURE__*/React.createElement(CheckedIcon, {
    className: "k-IconBadge__svg"
  })));
};