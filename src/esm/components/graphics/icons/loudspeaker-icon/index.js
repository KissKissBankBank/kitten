import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var LoudspeakerIcon = function LoudspeakerIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "19",
    height: "22",
    viewBox: "0 0 19 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M11.856 0l7 12.124-8.683 2.053.955 3.564 1.3-.75 1 1.731-4.33 2.5-1-1.732 1.237-.714-1.072-4-4.763 2.75L0 11.464l5.196-3L11.856 0zm-.255 3.557L7.605 8.636l2.08 3.602 6.095-1.442-4.18-7.239zm-5.405 6.64l-3.464 2 1.5 2.597 3.464-2-1.5-2.598z",
    fill: color
  }));
};
LoudspeakerIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
LoudspeakerIcon.defaultProps = {
  color: '#222',
  title: ''
};