import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../../constants/colors-config';
export const DoubleArrowIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8.48 15",
    height: "15",
    width: "8.48"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M0 4.24 L4.24 0 L8.48 4.24 L7.08 5.60 L4.24 2.77 L1.4 5.6 z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M0 10.76 L4.24 15 L8.48 10.76 L7.08 9.4 L4.24 12.33 L1.4 9.4 z"
  }));
};
DoubleArrowIcon.defaultProps = {
  color: COLORS.font1,
  title: ''
};
DoubleArrowIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};