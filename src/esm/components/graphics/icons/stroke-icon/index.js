import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var StrokeIcon = function StrokeIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "8",
    height: "2",
    viewBox: "0 0 8 2",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M0 0h8v2H0z"
  }));
};
StrokeIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
StrokeIcon.defaultProps = {
  color: '#fff',
  title: ''
};