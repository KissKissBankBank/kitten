import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../../components/buttons/button';
import { Deprecated } from '../../../../helpers/utils/deprecated';
export var RewardCardButton = function RewardCardButton(_ref) {
  var label = _ref.label,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      isDisabled = _ref.isDisabled;
  if (!label) return null;
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "big",
    modifier: "helium",
    type: "button",
    "aria-labelledby": label,
    className: "k-LegacyRewardCard__button",
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onClick: onClick,
    disabled: isDisabled
  }, label));
};
RewardCardButton.propTypes = {
  label: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool
};
RewardCardButton.defaultProps = {
  label: '',
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onClick: function onClick() {},
  disabled: false
};