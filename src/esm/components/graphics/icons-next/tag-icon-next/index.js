import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const TagIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M17.207 8.755a1.583 1.583 0 1 0-2.239-2.24 1.583 1.583 0 0 0 2.24 2.24Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.418.989a3.502 3.502 0 0 0-1.562.18 3.625 3.625 0 0 0-1.346.85L1.517 11.01A3.623 3.623 0 0 0 .45 13.503a3.385 3.385 0 0 0 .984 2.458L7.76 22.29c.646.646 1.53 1 2.459.984a3.623 3.623 0 0 0 2.492-1.068l8.993-8.992c.38-.382.67-.843.847-1.347.178-.505.24-1.04.18-1.563l-.658-5.733a3.324 3.324 0 0 0-.949-1.973 3.324 3.324 0 0 0-1.972-.948L13.418.99Zm6.557 3.893.67 5.736c.024.204 0 .413-.07.61a1.412 1.412 0 0 1-.33.525l-8.993 8.992a1.45 1.45 0 0 1-.997.427 1.354 1.354 0 0 1-.983-.393L2.944 14.45a1.354 1.354 0 0 1-.393-.983c.006-.372.16-.73.427-.998l8.992-8.992a1.41 1.41 0 0 1 .526-.333c.197-.07.407-.093.612-.07l5.73.67c.293.035.563.165.77.37.205.207.335.477.37.77l-.003-.003Z",
    fill: color
  }));
};
TagIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
TagIconNext.defaultProps = {
  color: '#222',
  title: null
};