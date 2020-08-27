import React from 'react';
import { IconBadge } from '../../../../components/notifications/icon-badge';
import { CheckedIcon } from '../../../../components/icons/checked-icon';
export var RewardCardCheckedIcon = function RewardCardCheckedIcon() {
  return /*#__PURE__*/React.createElement(IconBadge, {
    valid: true,
    className: "k-LegacyRewardCard__iconBadge"
  }, /*#__PURE__*/React.createElement(CheckedIcon, {
    className: "k-IconBadge__svg"
  }));
};