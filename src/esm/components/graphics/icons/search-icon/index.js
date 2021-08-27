import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["iconTitle", "title", "color", "circleProps", "pathProps", "width", "height"];
import React from 'react';
import PropTypes from 'prop-types';
export var SearchIcon = function SearchIcon(_ref) {
  var iconTitle = _ref.iconTitle,
      title = _ref.title,
      color = _ref.color,
      circleProps = _ref.circleProps,
      pathProps = _ref.pathProps,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    "aria-label": title,
    width: width,
    height: height,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", _extends({
    fill: color,
    d: "M14.7 13.3l-3.5-3.5a1 1 0 00-1.4 1.4l3.5 3.5a1 1 0 001.4-1.4z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    fill: color,
    d: "M6.3 0a6.3 6.3 0 100 12.6A6.3 6.3 0 006.3 0zm0 2a4.3 4.3 0 110 8.6 4.3 4.3 0 010-8.6z"
  }, circleProps)));
};
SearchIcon.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  circleProps: PropTypes.object,
  pathProps: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
SearchIcon.defaultProps = {
  title: null,
  color: '#333',
  circleProps: {},
  pathProps: {},
  width: 14,
  height: 14
};