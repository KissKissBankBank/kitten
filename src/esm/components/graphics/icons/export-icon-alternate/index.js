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
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h4v2H0zM6 0h6v2H6z M0 10h12v2H0z M10 8h2v4h-2zM10 0h2v6h-2z M4.4644661 6.12132034L10.12132033.4644661l1.41421357 1.41421357L5.87867966 7.5355339zM0 0h2v12H0z"
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