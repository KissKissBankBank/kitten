import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "secondaryColor", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var CrossCircleIconNext = function CrossCircleIconNext(_ref) {
  var color = _ref.color,
      secondaryColor = _ref.secondaryColor,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M14 0a14 14 0 1 0 .01 28.01A14 14 0 0 0 14 0Zm0 2a12 12 0 1 1-.01 24.01A12 12 0 0 1 14 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: secondaryColor,
    d: "M19.06 11.06a1.5 1.5 0 0 0-2.12-2.12L14 11.88l-2.94-2.94a1.5 1.5 0 0 0-2.12 2.12L11.88 14l-2.94 2.94a1.5 1.5 0 0 0 2.12 2.12L14 16.12l2.94 2.94a1.5 1.5 0 0 0 2.12-2.12L16.12 14l2.94-2.94Z"
  }));
};
CrossCircleIconNext.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  title: PropTypes.string
};
CrossCircleIconNext.defaultProps = {
  color: '#222',
  secondaryColor: '#006cff',
  title: null
};