import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const FilterIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M17.15 9.618H8.497a2.55 2.55 0 00-4.785 0H1.85a.85.85 0 000 1.7h1.853a2.55 2.55 0 004.786 0h8.661a.85.85 0 000-1.7zm-11.05 1.7a.85.85 0 110-1.7.85.85 0 010 1.7zm11.05 4.25h-3.553a2.55 2.55 0 00-4.785 0H1.85a.85.85 0 100 1.7h6.953a2.55 2.55 0 004.785 0h3.562a.85.85 0 000-1.7zm-5.95 1.7a.85.85 0 110-1.7.85.85 0 010 1.7zm-9.35-11.9h9.503a2.55 2.55 0 004.786 0h1.011a.85.85 0 000-1.7h-1.003a2.55 2.55 0 00-4.785 0H1.85a.85.85 0 000 1.7zm11.9-1.7a.85.85 0 110 1.7.85.85 0 010-1.7z"
  }));
};
FilterIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
FilterIconNext.defaultProps = {
  color: '#000',
  title: null
};