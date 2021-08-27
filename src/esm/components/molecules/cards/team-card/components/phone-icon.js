import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["phoneNumber", "tooltipColor", "className", "buttonLabel"];
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from '../../../../molecules/buttons/button-icon';
import { PhoneIcon } from '../../../../graphics/icons/phone-icon';
import { TeamCardButtonWithTooltip } from './button-with-tooltip';
import COLORS from '../../../../../constants/colors-config';
import classNames from 'classnames';
export var TeamCardPhoneIcon = function TeamCardPhoneIcon(_ref) {
  var phoneNumber = _ref.phoneNumber,
      tooltipColor = _ref.tooltipColor,
      className = _ref.className,
      buttonLabel = _ref.buttonLabel,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonIcon, {
    tag: "a",
    href: "tel:".concat(phoneNumber),
    modifier: "hydrogen",
    size: "tiny",
    className: classNames('k-ButtonIcon--phone', 'k-u-hidden@s-up', className),
    "aria-label": buttonLabel
  }, /*#__PURE__*/React.createElement(PhoneIcon, {
    "aria-hidden": true,
    className: "k-ButtonIcon__svg"
  })), /*#__PURE__*/React.createElement(TeamCardButtonWithTooltip, _extends({
    phoneNumber: phoneNumber,
    tooltipColor: tooltipColor,
    className: classNames('k-u-hidden@xs-down', className),
    "aria-label": buttonLabel
  }, props)));
};
TeamCardPhoneIcon.propTypes = {
  phoneNumber: PropTypes.string,
  tooltipColor: PropTypes.string,
  buttonLabel: PropTypes.string
};
TeamCardPhoneIcon.defaultProps = {
  phoneNumber: '',
  tooltipColor: COLORS.primary1,
  buttonLabel: 'Telephone'
};