import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var EllipsisIcon = function EllipsisIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 4",
    width: "16",
    height: "4",
    fill: "none"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "2",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "2",
    r: "2",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "2",
    r: "2",
    fill: color
  }));
};
EllipsisIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
EllipsisIcon.defaultProps = {
  color: '#222',
  title: ''
};