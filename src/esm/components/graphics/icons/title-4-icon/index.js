import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var Title4Icon = function Title4Icon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "15",
    height: "12",
    viewBox: "0 0 15 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M5.968 11.2V2.56h3.04V0H0v2.56h3.04v8.64h2.928zm7.892-.2V9.63h.97V8.04h-.97V4h-2.28L9 8.09v1.54h3.03V11h1.83zm-1.83-2.96h-1.27l1.27-2.02v2.02z",
    fill: color
  }));
};
Title4Icon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
Title4Icon.defaultProps = {
  color: '#222',
  title: ''
};