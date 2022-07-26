import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const ImageIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "22",
    height: "14",
    viewBox: "0 0 22 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M22 0v14H0V0h22zM2 11l5.5-6.545 5.036 5.993L15.5 7.455 20 12V2H2v9z",
    fill: color
  }));
};
ImageIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
ImageIcon.defaultProps = {
  color: '#222',
  title: ''
};