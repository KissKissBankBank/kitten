import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const CrossCircleIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M12.048 22a9.6 9.6 0 009.6-9.6 9.6 9.6 0 10-9.6 9.6zm0 2.4c6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12-6.627 0-12 5.372-12 12 0 6.627 5.373 12 12 12z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M16.359 9.854a1.25 1.25 0 00-1.768-1.768l-2.544 2.545-2.545-2.545a1.25 1.25 0 00-1.768 1.768l2.545 2.545-2.545 2.544a1.25 1.25 0 001.768 1.768l2.545-2.545 2.544 2.545a1.25 1.25 0 101.768-1.768L13.814 12.4l2.545-2.545z",
    clipRule: "evenodd"
  }));
};
CrossCircleIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
CrossCircleIconNext.defaultProps = {
  color: '#222',
  title: null
};