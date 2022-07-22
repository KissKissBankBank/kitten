import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const MenuIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M0 0 v20 h100 v-20 z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 40 v20 h100 v-20 z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 80 v20 h100 v-20 z"
  }));
};
MenuIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
MenuIcon.defaultProps = {
  color: '#222',
  title: ''
};