import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var RefundIcon = function RefundIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M7.048 12.174h.868v.308c0 .14 0 .21.014.35h-.882v1.708h1.19c.616 1.89 2.044 2.982 4.046 2.982 1.246 0 2.45-.392 3.346-1.33l-1.372-1.484c-.504.588-1.022.91-1.96.91-.77 0-1.554-.392-1.834-1.078h2.646v-1.708H9.988c-.014-.126-.014-.196-.014-.35 0-.126 0-.182.014-.308h3.122v-1.708h-2.66c.336-.756 1.092-1.162 1.834-1.162.84 0 1.372.308 1.834.966l1.372-1.428c-.588-.798-1.694-1.442-3.192-1.442-2.03 0-3.584 1.232-4.074 3.066H7.048v1.708z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12.048.4C8.216.4 4.616 2.22 2.371 5.316v-.755a1.161 1.161 0 00-2.323 0v4.205c0 .297.24.537.537.537h4.302a1.161 1.161 0 000-2.322h-.852c3.02-4.413 9.02-5.575 13.433-2.555s5.574 9.02 2.555 13.432c-3.02 4.413-9.02 5.574-13.433 2.555a9.64 9.64 0 01-3.958-5.77 9.754 9.754 0 01-.228-1.47c-.047-.64-.553-1.16-1.194-1.16-.642 0-1.173.52-1.135 1.16a11.94 11.94 0 00.271 1.89c1.214 5.342 5.998 9.337 11.702 9.337 6.62 0 12-5.38 12-12s-5.38-12-12-12z"
  }));
};
RefundIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
RefundIcon.defaultProps = {
  color: '#222',
  title: ''
};