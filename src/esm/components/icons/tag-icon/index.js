import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var TagIcon = function TagIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "20",
    height: "18",
    viewBox: "0 0 20 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M13.125 0l6.464 3.196-.464 7.196-12.125 7a2 2 0 01-2.732-.732l-4-6.928A2 2 0 011 7l12.125-7zm.072 2.268L2 8.732l4 6.928 11.196-6.464.31-4.798-4.309-2.13zm-.853 3.38a1.5 1.5 0 111.5 2.599 1.5 1.5 0 01-1.5-2.6z",
    fill: color
  }));
};
TagIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
TagIcon.defaultProps = {
  color: '#222',
  title: ''
};