import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const ListIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "14",
    height: "10",
    viewBox: "0 0 14 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M2 8v2H0V8h2zm12 0v2H4V8h10zM2 4v2H0V4h2zm12 0v2H4V4h10zM2 0v2H0V0h2zm12 0v2H4V0h10z",
    fill: color
  }));
};
ListIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
ListIcon.defaultProps = {
  color: '#222',
  title: ''
};