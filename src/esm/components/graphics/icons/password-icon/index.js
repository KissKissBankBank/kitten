import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
export var PasswordIcon = function PasswordIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

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