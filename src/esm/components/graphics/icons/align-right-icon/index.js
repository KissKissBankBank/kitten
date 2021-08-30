import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var AlignRightIcon = function AlignRightIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "14",
    height: "10",
    viewBox: "0 0 14 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), ">", /*#__PURE__*/React.createElement("path", {
    d: "M14 8v2H5V8h9zm0-4v2H0V4h14zm0-4v2H3V0h11z",
    fill: color
  }));
};
AlignRightIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
AlignRightIcon.defaultProps = {
  color: '#222',
  title: ''
};