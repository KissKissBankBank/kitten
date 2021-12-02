import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var PlusIconNext = function PlusIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M5 1v10a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 4.75H1a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z",
    fill: color
  }));
};
PlusIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
PlusIconNext.defaultProps = {
  color: '#222',
  title: null
};