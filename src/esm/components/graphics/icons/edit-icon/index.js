import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const EditIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "11",
    height: "16",
    viewBox: "0 0 11 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M8.482 6.469l-4.909 8.503-2.823.89-.641-2.89 4.909-8.503 3.464 2zm2.5-4.33l-1.5 2.598-3.464-2 1.5-2.598 3.464 2z"
  }));
};
EditIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
EditIcon.defaultProps = {
  color: '#fff',
  title: ''
};