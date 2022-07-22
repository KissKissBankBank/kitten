import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const LinkIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M13.98 1.03a3.47 3.47 0 0 0-4.93 0L6 4.1a3.51 3.51 0 0 0 0 4.95l.96.97c.3.3.77.3 1.06 0 .3-.3.3-.77 0-1.07L7.04 8a2 2 0 0 1 0-2.82l3.07-3.08a1.98 1.98 0 0 1 2.81 0 2 2 0 0 1 0 2.82L11.74 6.1l-.35.35a.75.75 0 0 0 1.06 1.07l.35-.36 1.18-1.19a3.51 3.51 0 0 0 0-4.94ZM2.02 14.97a3.47 3.47 0 0 0 4.93 0L10 11.9a3.51 3.51 0 0 0 0-4.95l-.96-.97a.75.75 0 0 0-1.06 0c-.3.3-.3.77 0 1.06l.97.98a2 2 0 0 1 0 2.82l-3.07 3.08c-.78.78-2.04.78-2.81 0a2 2 0 0 1 0-2.82l1.19-1.2.35-.35c.3-.3.3-.77 0-1.07a.75.75 0 0 0-1.06 0l-.35.36-1.18 1.19a3.51 3.51 0 0 0 0 4.94Z"
  }));
};
LinkIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
LinkIconNext.defaultProps = {
  color: '#222',
  title: ''
};