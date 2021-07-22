import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var ItalicIcon = function ItalicIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "5",
    height: "12",
    viewBox: "0 0 5 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M3.072 3.248c.736 0 1.328-.592 1.328-1.312C4.4 1.2 3.808.608 3.072.608c-.736 0-1.312.592-1.312 1.328 0 .72.576 1.312 1.312 1.312zM2.816 12L3.92 4.16H1.632L.528 12h2.288z",
    fill: color
  }));
};
ItalicIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
ItalicIcon.defaultProps = {
  color: '#222',
  title: ''
};