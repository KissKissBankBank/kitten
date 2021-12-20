import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var ThumbUpIconNext = function ThumbUpIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M17.142 4.667A3.666 3.666 0 0 0 13.473 1h-1.178l-.656.979L6.426 9.8H1V23h18.365l3.302-8.276a4.658 4.658 0 0 0-4.318-6.39H16.66l.063-.243c.278-1.12.419-2.27.418-3.424ZM6.136 20.8H3.201V12h2.935v8.8Zm12.213-10.267a2.463 2.463 0 0 1 2.447 2.197c.043.4-.013.803-.162 1.177L17.875 20.8H8.337v-9.9l5.136-7.7a1.468 1.468 0 0 1 1.468 1.467 11.92 11.92 0 0 1-.367 2.889l-.734 2.977h4.509Z",
    fill: color
  }));
};
ThumbUpIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
ThumbUpIconNext.defaultProps = {
  color: '#222',
  title: null
};