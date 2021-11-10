import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var EyeIconNext = function EyeIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M12 4C3.75 4 1 12 1 12s2.75 8 11 8 11-8 11-8-2.75-8-11-8Zm0 14c-5.459 0-8-4.333-8.776-6C4.001 10.333 6.558 6 12 6s8 4.333 8.776 6c-.777 1.667-3.334 6-8.776 6Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 5.818a1.819 1.819 0 1 1 0-3.637 1.819 1.819 0 0 1 0 3.637Z",
    fill: color
  }));
};
EyeIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
EyeIconNext.defaultProps = {
  color: '#222',
  title: null
};