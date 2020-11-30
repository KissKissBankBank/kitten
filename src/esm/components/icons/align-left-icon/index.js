import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var AlignLeftIcon = function AlignLeftIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "14",
    height: "10",
    viewBox: "0 0 14 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), ">", /*#__PURE__*/React.createElement("path", {
    d: "M9 8v2H0V8h9zm5-4v2H0V4h14zm-3-4v2H0V0h11z",
    fill: color
  }));
};
AlignLeftIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
AlignLeftIcon.defaultProps = {
  color: '#222',
  title: ''
};