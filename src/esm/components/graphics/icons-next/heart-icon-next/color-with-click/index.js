import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const ColorHeartWithClickIconNext = _ref => {
  let {
    color,
    secondaryColor,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "30",
    height: "31",
    viewBox: "0 0 30 31",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: secondaryColor,
    d: "M29.9 20.5a1.27 1.27 0 0 0-.64-.67L16.2 13.72a1.53 1.53 0 0 0-1.54.05c-.36.36-.46.91-.32 1.49l3.9 13.87c.1.31.3.57.56.74.38.24.82.24 1.1 0 .05-.04.13-.1.15-.17l1.18-2.45s0-.02.02-.02l.7-1.45s.03-.02.03-.05l.02-.02.14-.27 2.7 3.18c.6.7 1.57.87 2.31.43a1.83 1.83 0 0 0 .5-2.79c-.88-1.06-1.8-2.12-2.71-3.2.12-.05.21-.1.29-.12h.02c.02 0 .05 0 .05-.02l1.54-.46h.02l2.6-.77a.52.52 0 0 0 .2-.12c.36-.22.4-.63.24-1.06Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "m15.52 26.56-.04.02c-.3.17-.68.32-1.22.32a2.6 2.6 0 0 1-1.23-.32l-.06-.03a39.61 39.61 0 0 1-6.77-4.68h-.01a19.87 19.87 0 0 1-4.08-4.44 10.75 10.75 0 0 1-1.8-5.5 9.56 9.56 0 0 1 1.98-6.07l.04-.07a7.7 7.7 0 0 1 5.4-2.9 8.85 8.85 0 0 1 5.39 1.17l.07.04a6.74 6.74 0 0 1 1 .73c.05.05.1.04.1.04s.04 0 .1-.04l.09-.08a8.18 8.18 0 0 1 5.18-1.95h.3c2.42 0 4.51.9 6.1 2.6a9.53 9.53 0 0 1 2.08 4.45 9.62 9.62 0 0 1-1.22 6.76l-2-.95A7.5 7.5 0 0 0 26 10.25v-.02a7.04 7.04 0 0 0-1.57-3.31A5.64 5.64 0 0 0 20 5.02h-.27a5.7 5.7 0 0 0-4.52 2.16s-.06.08 0 0l-.81 1.04-.87-.98A5.97 5.97 0 0 0 12 5.94a6.58 6.58 0 0 0-4.05-.85 5.5 5.5 0 0 0-3.92 2.08l-.07.1a7.21 7.21 0 0 0-1.46 4.56c.05 1.55.52 3 1.44 4.41l.05.07A19.63 19.63 0 0 0 7.6 20.2l.03.03a38.1 38.1 0 0 0 6.38 4.4l.06.02.08.08c.05.05.1.04.1.04s.06 0 .12-.04l.07-.08.06-.03.42-.23.6 2.17Z"
  }));
};
ColorHeartWithClickIconNext.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  title: PropTypes.string
};
ColorHeartWithClickIconNext.defaultProps = {
  color: '#222',
  secondaryColor: '#006cff',
  title: null
};