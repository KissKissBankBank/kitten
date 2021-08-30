import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var BubbleIcon = function BubbleIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "14",
    height: "12",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M3.417 11.155L1.5 12.732l.431-2.594C.735 9.062 0 7.604 0 6c0-3.314 3.134-6 7-6s7 2.686 7 6-3.134 6-7 6a7.865 7.865 0 0 1-3.583-.845z",
    fillRule: "evenodd"
  }));
};
BubbleIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
BubbleIcon.defaultProps = {
  color: '#222',
  title: ''
};