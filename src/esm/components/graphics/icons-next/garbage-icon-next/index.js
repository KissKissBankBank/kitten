import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var GarbageIconNext = function GarbageIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M0 3.8c0 .42.35.77.77.77h1.36v.11l.75 9.91c.05.58.31 1.1.75 1.5.43.39 1 .6 1.6.6h5.55c.59 0 1.16-.21 1.59-.6.43-.4.7-.93.74-1.5l.76-9.91v-.11h1.36a.77.77 0 1 0 0-1.55H8.8V1.5a.8.8 0 1 0-1.6 0v1.52H.77a.77.77 0 0 0-.77.77Zm12.27.77-.75 9.91a.7.7 0 0 1-.24.48.76.76 0 0 1-.5.19H5.22a.76.76 0 0 1-.5-.2.7.7 0 0 1-.24-.47l-.75-9.91h8.54Z"
  }));
};
GarbageIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
GarbageIconNext.defaultProps = {
  color: '#222',
  title: null
};