import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { Badge as BadgeComponent } from '../../../information/badge';
import COLORS from '../../../../constants/colors-config';
export const Badge = _ref => {
  let {
    backgroundColor,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(BadgeComponent, _extends({
    color: backgroundColor,
    spaced: true
  }, props));
};
Badge.propTypes = {
  backgroundColor: PropTypes.string,
  a11yText: PropTypes.string
};
Badge.defaultProps = {
  backgroundColor: COLORS.primary1,
  a11yText: 'Notification(s)'
};