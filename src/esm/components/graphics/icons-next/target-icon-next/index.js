import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const TargetIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M19.043 6.238h-2.41l3.996-3.995A1.314 1.314 0 0 0 18.77.385L14.775 4.38V1.97a1.314 1.314 0 0 0-1.44-1.313 1.351 1.351 0 0 0-1.186 1.37v4.211a2.626 2.626 0 0 0 2.626 2.626h4.212a1.352 1.352 0 0 0 1.37-1.185 1.314 1.314 0 0 0-1.314-1.44Zm-2.052 6.01a1.267 1.267 0 0 1 1.25-1.086h.096a1.26 1.26 0 0 1 1.257 1.418 9.85 9.85 0 0 1-16.71 5.549 9.85 9.85 0 0 1-.636-13.227A9.848 9.848 0 0 1 8.433 1.42a1.26 1.26 0 0 1 1.419 1.254v.095A1.268 1.268 0 0 1 8.765 4.02a7.222 7.222 0 1 0 8.227 8.23Zm-3.808-1.086h.095a1.267 1.267 0 0 1 1.192 1.704A4.924 4.924 0 1 1 8.147 6.54a1.268 1.268 0 0 1 1.704 1.195v.095a1.314 1.314 0 0 1-.85 1.199 2.296 2.296 0 0 0-1.448 2.166 2.327 2.327 0 0 0 2.265 2.265 2.296 2.296 0 0 0 2.17-1.444 1.312 1.312 0 0 1 1.195-.854Z",
    clipRule: "evenodd"
  }));
};
TargetIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
TargetIconNext.defaultProps = {
  color: '#222',
  title: null
};