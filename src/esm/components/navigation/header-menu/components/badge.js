import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["backgroundColor"];
import React from 'react';
import PropTypes from 'prop-types';
import { Badge as BadgeComponent } from '../../../information/badge';
import COLORS from '../../../../constants/colors-config';
export var Badge = function Badge(_ref) {
  var backgroundColor = _ref.backgroundColor,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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