import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconBadge } from '../../../../components/notifications/icon-badge';
import { DiamondIcon } from '../../../../components/icons/diamond-icon';
export var RewardCardDiamondBadge = function RewardCardDiamondBadge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["children", "className", "disabled"]);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-RewardCard__diamondBadge', className, {
      'k-RewardCard__diamondBadge--disabled': disabled
    })
  }), /*#__PURE__*/React.createElement(IconBadge, {
    big: true,
    disabled: disabled
  }, /*#__PURE__*/React.createElement(DiamondIcon, {
    className: "k-RewardCard__diamondBadge__diamondIcon k-IconBadge__svg",
    "aria-hidden": true
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-RewardCard__diamondBadge__content"
  }, children));
};
RewardCardDiamondBadge.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node
};
RewardCardDiamondBadge.defaultProps = {
  disabled: false,
  children: null
};