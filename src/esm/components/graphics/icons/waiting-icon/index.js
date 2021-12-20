import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var WaitingIcon = function WaitingIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 3",
    width: "13",
    height: "3"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M5 0h3v3H5V0zM0 0h3v3H0V0zm10 0h3v3h-3V0z",
    fill: color,
    fillRule: "nonzero"
  }));
};
WaitingIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
WaitingIcon.defaultProps = {
  color: '#fff',
  title: ''
};