import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const GrabberIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    width: "32",
    height: "32",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M0 0 v100 h20 v-100 z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 0 v100 h20 v-100 z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M80 0 v100 h20 v-100 z"
  }));
};
GrabberIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
GrabberIcon.defaultProps = {
  color: '#222',
  title: ''
}; // DEPRECATED: do not use default export.

export default GrabberIcon;