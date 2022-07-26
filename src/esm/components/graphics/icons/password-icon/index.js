import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
export const PasswordIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 12",
    fill: color,
    width: "18"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M9 0C4 0 0 4 0 6s4 6 9 6 9-4 9-6-4-6-9-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "6",
    r: "2"
  }));
};
PasswordIcon.defaultProps = {
  color: '#222',
  title: ''
};