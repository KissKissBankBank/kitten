import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var ExportIcon = function ExportIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M8 4.207v5.414H6V4.207L4.172 6.036 2.757 4.62 7 .38l1.414 1.414 2.829 2.828-1.415 1.415L8 4.207zm4 11.414H0v-6h2v4h10v-4h2v6h-2z"
  }));
};
ExportIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
ExportIcon.defaultProps = {
  color: '#fff',
  title: ''
};