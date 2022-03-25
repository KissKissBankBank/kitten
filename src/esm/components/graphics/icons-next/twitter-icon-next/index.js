import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var TwitterIconNext = function TwitterIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "26",
    height: "21",
    viewBox: "0 0 26 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M25.941 2.495a10.69 10.69 0 0 1-3.061.82 5.288 5.288 0 0 0 2.338-2.92 10.518 10.518 0 0 1-3.373 1.28A5.303 5.303 0 0 0 17.96 0a5.305 5.305 0 0 0-5.315 5.3c0 .41.05.82.13 1.214A15.125 15.125 0 0 1 1.816.97a5.246 5.246 0 0 0-.724 2.675c0 1.839.939 3.46 2.37 4.414a5.377 5.377 0 0 1-2.404-.674v.065a5.303 5.303 0 0 0 4.262 5.2 5.65 5.65 0 0 1-1.4.18c-.346 0-.674-.033-1.004-.08a5.323 5.323 0 0 0 4.97 3.675 10.679 10.679 0 0 1-6.6 2.265c-.446 0-.858-.016-1.285-.066A15.092 15.092 0 0 0 8.165 21c9.777 0 15.126-8.07 15.126-15.076 0-.23 0-.46-.015-.69a11.429 11.429 0 0 0 2.665-2.74Z",
    fill: color
  }));
};
TwitterIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
TwitterIconNext.defaultProps = {
  color: '#fff',
  title: null
};