import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var EmailIcon = function EmailIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "19",
    height: "12",
    viewBox: "0 0 19 12",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 8l9-6v10H.5V2l9 6zm0-2l-9-6h18l-9 6z"
  }));
};
EmailIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
EmailIcon.defaultProps = {
  color: '#222',
  title: ''
};