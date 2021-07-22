import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var DotIcon = function DotIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 6 6",
    width: "6",
    height: "6"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "3",
    fill: color
  }));
};
DotIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
DotIcon.defaultProps = {
  color: '#fff',
  title: ''
};