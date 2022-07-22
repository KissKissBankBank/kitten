import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const StrokeIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "8",
    height: "2",
    viewBox: "0 0 8 2",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M0 0h8v2H0z"
  }));
};
StrokeIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
StrokeIcon.defaultProps = {
  color: '#fff',
  title: ''
};