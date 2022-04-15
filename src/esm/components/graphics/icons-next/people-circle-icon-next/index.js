import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var PeopleCircleIconNext = function PeopleCircleIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "11",
    stroke: color,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M5 20c1.615-2.4 2.692-4 7-4s5.923 2.4 7 4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9.5",
    r: "3.5",
    stroke: color,
    strokeWidth: "2"
  }));
};
PeopleCircleIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
PeopleCircleIconNext.defaultProps = {
  color: '#222',
  title: null
};