import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var EditIconNext = function EditIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M15.66 1a3.311 3.311 0 00-2.356.976L7.26 8.022a5.479 5.479 0 00-1.617 3.902v2.43h2.43a5.476 5.476 0 003.9-1.617l6.046-6.045A3.333 3.333 0 0015.66 1zm1.127 4.46l-6.043 6.047a3.75 3.75 0 01-2.67 1.106h-.688v-.688A3.752 3.752 0 018.49 9.257l6.046-6.048a1.593 1.593 0 012.253 2.253l-.003-.003z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M4.193 19h10.449a3.192 3.192 0 003.193-3.194v-3.774a.87.87 0 00-1.742 0v3.774a1.452 1.452 0 01-1.451 1.452H4.192a1.451 1.451 0 01-1.45-1.452V5.355a1.452 1.452 0 011.45-1.452h3.774a.871.871 0 100-1.742H4.193A3.192 3.192 0 001 5.355v10.451A3.194 3.194 0 004.193 19z"
  }));
};
EditIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
EditIconNext.defaultProps = {
  color: '#222',
  title: null
};