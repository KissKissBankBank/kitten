import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const LinkedinIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14",
    width: "14",
    height: "14",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M1.622 0a1.62 1.62 0 1 1-.002 3.242A1.62 1.62 0 0 1 1.622 0zm-1.4 13.465H3.02V4.47H.222v8.995zM4.773 4.47h2.68V5.7h.038c.374-.707 1.286-1.452 2.646-1.452 2.83 0 3.353 1.862 3.353 4.284v4.933h-2.796V9.09c0-1.042-.018-2.384-1.452-2.384-1.455 0-1.677 1.137-1.677 2.31v4.45H4.773V4.47"
  }));
};
LinkedinIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
LinkedinIcon.defaultProps = {
  color: '#222',
  title: ''
};