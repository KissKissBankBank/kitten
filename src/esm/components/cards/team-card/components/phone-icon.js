import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from '../../../buttons/button-icon';
import { PhoneIcon } from '../../../icons/phone-icon';
import { TeamCardButtonWithTooltip } from './button-with-tooltip';
import COLORS from '../../../../constants/colors-config';
import classNames from 'classnames';
export var TeamCardPhoneIcon = function TeamCardPhoneIcon(_ref) {
  var phoneNumber = _ref.phoneNumber,
      tooltipColor = _ref.tooltipColor,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["phoneNumber", "tooltipColor", "className"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonIcon, {
    tag: "a",
    href: "tel:".concat(phoneNumber),
    modifier: "hydrogen",
    className: classNames('k-ButtonIcon--phone', 'k-u-hidden@s-up', className)
  }, /*#__PURE__*/React.createElement(PhoneIcon, {
    className: "k-ButtonIcon__svg"
  })), /*#__PURE__*/React.createElement(TeamCardButtonWithTooltip, _extends({
    phoneNumber: phoneNumber,
    tooltipColor: tooltipColor,
    className: className
  }, props)));
};
TeamCardPhoneIcon.propTypes = {
  phoneNumber: PropTypes.string,
  tooltipColor: PropTypes.string
};
TeamCardPhoneIcon.defaultProps = {
  phoneNumber: '',
  tooltipColor: COLORS.primary1
};