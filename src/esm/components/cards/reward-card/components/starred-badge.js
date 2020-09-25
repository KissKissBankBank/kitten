import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconBadge } from '../../../../components/notifications/icon-badge';
import { StarIcon } from '../../../../components/icons/star-icon';
export var RewardCardStarredBadge = function RewardCardStarredBadge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["children", "className", "disabled"]);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-RewardCard__starredBadge', className, {
      'k-RewardCard__starredBadge--disabled': disabled
    })
  }), /*#__PURE__*/React.createElement(IconBadge, {
    big: true,
    disabled: disabled
  }, /*#__PURE__*/React.createElement(StarIcon, {
    className: "k-RewardCard__starredBadge__starredIcon k-IconBadge__svg",
    "aria-hidden": true
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-RewardCard__starredBadge__content"
  }, children));
};
RewardCardStarredBadge.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node
};
RewardCardStarredBadge.defaultProps = {
  disabled: false,
  children: null
};