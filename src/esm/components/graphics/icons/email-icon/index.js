import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const EmailIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "19",
    height: "12",
    viewBox: "0 0 19 12",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 8l9-6v10H.5V2l9 6zm0-2l-9-6h18l-9 6z"
  }));
};
EmailIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
EmailIcon.defaultProps = {
  color: '#222',
  title: ''
};