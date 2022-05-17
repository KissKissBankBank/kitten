import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var MicrophoneIconNext = function MicrophoneIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "m15.38 16.23.5.02a8.13 8.13 0 1 0-8.11-7.63l-4.65 4.65a5.38 5.38 0 0 0-.93 6.35L.45 21.36a1.55 1.55 0 0 0 2.2 2.19l1.73-1.74a5.37 5.37 0 0 0 6.35-.93l4.65-4.65Zm.5-13.13a5.03 5.03 0 1 1 0 10.06 5.03 5.03 0 0 1 0-10.06ZM6.92 19.35a2.28 2.28 0 0 1-1.61-3.9l3.42-3.42a8.19 8.19 0 0 0 3.23 3.23l-3.42 3.42c-.43.43-1.01.67-1.62.67Z",
    fill: color
  }));
};
MicrophoneIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
MicrophoneIconNext.defaultProps = {
  color: '#222',
  title: null
};