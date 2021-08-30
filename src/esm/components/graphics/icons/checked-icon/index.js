import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var CheckedIcon = function CheckedIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      other = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 8",
    width: "11",
    height: "8",
    fill: color
  }, other), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M.904 4.06l1.414-1.414L4.44 4.768 8.682.525l1.414 1.414L4.44 7.596.904 4.061z"
  }));
};
CheckedIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
CheckedIcon.defaultProps = {
  color: '#fff',
  title: ''
};