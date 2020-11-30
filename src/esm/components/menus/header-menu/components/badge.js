import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden';
import COLORS from '../../../../constants/colors-config';
export var Badge = function Badge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      backgroundColor = _ref.backgroundColor,
      a11yText = _ref.a11yText,
      props = _objectWithoutProperties(_ref, ["children", "className", "backgroundColor", "a11yText"]);

  var badgeClassNames = classNames('k-Badge', 'k-Badge--spaced', 'k-Badge--no-border', className);
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: badgeClassNames,
    "aria-hidden": "true",
    style: {
      backgroundColor: backgroundColor
    }
  }), children, a11yText && /*#__PURE__*/React.createElement(VisuallyHidden, null, a11yText));
};
Badge.propTypes = {
  backgroundColor: PropTypes.string,
  a11yText: PropTypes.string
};
Badge.defaultProps = {
  backgroundColor: COLORS.primary1,
  a11yText: 'Notification(s)'
};