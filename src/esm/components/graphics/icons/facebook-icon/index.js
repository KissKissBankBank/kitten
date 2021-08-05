import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var FacebookIcon = function FacebookIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 15",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M4.785 14.196V7.72H6.96l.324-2.523h-2.5v-1.61c0-.732.204-1.23 1.252-1.23h1.336V.1C7.142.07 6.348 0 5.425 0 3.498 0 2.18 1.176 2.18 3.336v1.86H0v2.525h2.18v6.476h2.605z"
  }));
};
FacebookIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
FacebookIcon.defaultProps = {
  color: '#222',
  title: ''
};