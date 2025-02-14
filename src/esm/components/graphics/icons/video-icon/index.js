import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const VideoIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "22",
    height: "16",
    viewBox: "0 0 22 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M17 0a5 5 0 015 5v6a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5h12zM9 5v6l6-3-6-3z",
    fill: color
  }));
};
VideoIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
VideoIcon.defaultProps = {
  color: '#222',
  title: ''
};