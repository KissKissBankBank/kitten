import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var GarbageIcon = function GarbageIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "12",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 14",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M4.3 0h3v2h-3zM0 2h12v1H0zm1 2l1 10h8l1-10H1zm3.5 8h-1V6h1v6zm2 0h-1V6h1v6zm2 0h-1V6h1v6z"
  }));
};
GarbageIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
GarbageIcon.defaultProps = {
  color: '#fff',
  title: ''
};