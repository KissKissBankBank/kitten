import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var ParagraphIcon = function ParagraphIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "12",
    viewBox: "0 0 24 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M4.464 0C7.536 0 9.12 1.424 9.12 3.936c0 2.432-1.584 3.984-4.656 3.984H2.912v3.28H0V0zM19 9v2h-7V9h7zm5-4v2H12V5h12zM4.192 2.56h-1.28v2.8h1.28c1.328 0 2.016-.448 2.016-1.44 0-1.008-.688-1.36-2.016-1.36zM21 1v2h-9V1h9z",
    fill: color
  }));
};
ParagraphIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
ParagraphIcon.defaultProps = {
  color: '#222',
  title: ''
};