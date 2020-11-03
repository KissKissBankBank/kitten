import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var InstagramIcon = function InstagramIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 70 70",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M17 0A17 17 0 0 0 0 17v36a17 17 0 0 0 17 17h36a17 17 0 0 0 17-17V17A17 17 0 0 0 53 0zm0 6h36a10.91 10.91 0 0 1 11 11v36a10.91 10.91 0 0 1-11 11H17A10.91 10.91 0 0 1 6 53V17A10.91 10.91 0 0 1 17 6zm38 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm-20 6a17 17 0 1 0 17 17 17 17 0 0 0-17-17zm0 6a11 11 0 1 1-11 11 11 11 0 0 1 11-11z"
  }));
};
InstagramIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
InstagramIcon.defaultProps = {
  color: '#222',
  title: ''
};