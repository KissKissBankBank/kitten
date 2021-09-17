import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import "core-js/modules/es.array.fill.js";
import React from 'react';
import PropTypes from 'prop-types';
export var LocationIcon = function LocationIcon(_ref) {
  var _extends2;

  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends((_extends2 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 15",
    fill: "#222",
    width: "12",
    height: "15"
  }, _extends2["fill"] = color, _extends2), props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M6 0C2.686 0 0 2.72 0 6.033 0 7.69.672 9.186 1.758 10.31L6 14.313l4.282-4.094v-.008A6.003 6.003 0 0 0 6 0zm.04 8.4a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z"
  }));
};
LocationIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
LocationIcon.defaultProps = {
  color: '#222',
  title: ''
};