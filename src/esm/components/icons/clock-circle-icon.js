import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
export var ClockCircleIcon = function ClockCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      clockColor = _ref.clockColor,
      props = _objectWithoutProperties(_ref, ["circleColor", "clockColor"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/React.createElement("title", null, "Clock circle"), /*#__PURE__*/React.createElement("circle", {
    fill: circleColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    fill: clockColor,
    d: "M11 9h3v2H9V4h2v5z"
  }));
};
ClockCircleIcon.defaultProps = {
  circleColor: '#fff',
  clockColor: '#333'
};