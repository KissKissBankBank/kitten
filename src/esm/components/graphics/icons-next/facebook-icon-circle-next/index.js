import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var FacebookIconCircleNext = function FacebookIconCircleNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24 12.073C24 5.406 18.627 0 12 0S0 5.406 0 12.073C0 18.098 4.388 23.093 10.125 24v-8.436H7.077v-3.491h3.048v-2.66c0-3.026 1.792-4.698 4.533-4.698 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.931-1.956 1.887v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.095 24 18.1 24 12.073Z"
  }));
};
FacebookIconCircleNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
FacebookIconCircleNext.defaultProps = {
  color: '#1977F3',
  title: null
};