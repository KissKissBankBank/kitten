import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../../action/button';
import { PhoneIcon } from '../../../../graphics/icons/phone-icon';
import { TeamCardButtonWithTooltip } from './button-with-tooltip';
import COLORS from '../../../../../constants/colors-config';
import classNames from 'classnames';
export const TeamCardPhoneIcon = _ref => {
  let {
    phoneNumber,
    tooltipColor,
    className,
    buttonLabel,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    tag: "a",
    fit: "icon",
    href: "tel:" + phoneNumber,
    modifier: "hydrogen",
    size: "small",
    className: classNames('k-u-hidden@s-up', className),
    "aria-label": buttonLabel
  }, /*#__PURE__*/React.createElement(PhoneIcon, {
    "aria-hidden": true
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