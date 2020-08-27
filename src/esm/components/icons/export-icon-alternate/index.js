import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var ExportIconAlternate = function ExportIconAlternate(_ref) {
  var color = _ref.color,
      iconTitle = _ref.iconTitle,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "iconTitle", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": iconTitle || title,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12",
    width: "12",
    height: "12",
    fill: color
  }, props), title !== '' && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "0",
    width: "6",
    height: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "3",
    width: "8",
    height: "2",
    transform: "rotate(-45 8 4)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "2",
    height: "12"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "10",
    width: "12",
    height: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "8",
    width: "2",
    height: "4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "0",
    width: "2",
    height: "6"
  }));
};
ExportIconAlternate.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
ExportIconAlternate.defaultProps = {
  color: '#000',
  title: ''
};