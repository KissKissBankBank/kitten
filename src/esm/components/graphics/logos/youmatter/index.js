import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["width", "height", "color"];
import React from 'react';
import PropTypes from 'prop-types';
import { computeFromRatio } from '../../../../helpers/utils/ratio';
export var YouMatterLogo = function YouMatterLogo(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var DEFAULT_WIDTH = 231;
  var DEFAULT_HEIGHT = 40;
  var computed = computeFromRatio({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width: width,
    height: height
  });
  var viewBox = {
    x: DEFAULT_WIDTH,
    y: DEFAULT_HEIGHT
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": "Youmatter",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + viewBox.x + " " + viewBox.y,
    width: computed.width,
    height: computed.height,
    fill: color
  }, props), /*#__PURE__*/React.createElement("title", null, "Youmatter"), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-10.03)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.28 39.36a1.52 1.52 0 0 1-1-1.42 1.43 1.43 0 0 1 1.42-1.42 2.45 2.45 0 0 1 .82.17 6.92 6.92 0 0 0 2.41.39c2.06 0 3.27-1.25 4.47-4l.17-.34-9.29-19.7a2.27 2.27 0 0 1-.21-.9 1.64 1.64 0 0 1 1.68-1.64 1.75 1.75 0 0 1 1.67 1.29l7.74 17.46L28 11.79a1.66 1.66 0 0 1 1.59-1.25 1.63 1.63 0 0 1 1.64 1.64 2.86 2.86 0 0 1-.17.81l-8.69 20.73c-1.93 4.6-4.08 6.28-7.44 6.28a10.58 10.58 0 0 1-3.65-.64ZM32.56 22v-.1a11.59 11.59 0 0 1 23.18-.09v.09a11.55 11.55 0 0 1-11.66 11.61A11.39 11.39 0 0 1 32.56 22Zm19.78 0v-.1a8.41 8.41 0 0 0-8.26-8.69c-4.81 0-8.12 3.91-8.12 8.6v.09a8.34 8.34 0 0 0 8.21 8.64c4.83 0 8.17-3.87 8.17-8.54ZM79 31.53a1.64 1.64 0 1 1-3.27 0v-2.41a8.45 8.45 0 0 1-7.61 4.34c-5.37  0-8.51-3.61-8.51-8.9V12.22a1.61 1.61 0 0 1 1.63-1.68 1.68 1.68 0 0 1 1.68 1.68v11.53c0 4.12 2.23 6.7 6.15  6.7s6.66-2.79 6.66-7V12.22a1.62 1.62 0 0 1 1.64-1.68A1.64 1.64 0 0 1 79 12.22ZM84.58 12.22a1.68 1.68 0 0 1 1.64-1.68 1.65 1.65 0 0 1 1.67 1.68v2.28c1.47-2.19 3.44-4.21 7.18-4.21a7.54 7.54 0 0 1 7.14 4.42 8.86 8.86 0 0 1 7.79-4.42c5.12 0 8.26 3.44 8.26 8.94v12.3a1.66 1.66 0 1 1-3.31 0V20c0-4.3-2.15-6.7-5.77-6.7-3.35 0-6.1 2.49-6.1 6.88v11.35a1.66 1.66 0 1 1-3.31 0V19.92c0-4.17-2.2-6.62-5.72-6.62s-6.2 2.92-6.2 7v11.23a1.62 1.62 0 0 1-1.63 1.68 1.66 1.66 0 0 1-1.68-1.68ZM122 26.54v-.09c0-4.68 3.87-7.18 9.5-7.18a23.58 23.58 0 0 1 6.84.95v-.78c0-4-2.45-6.06-6.62-6.06a13.86 13.86 0 0 0-5.76 1.25 1.86 1.86 0 0 1-.61.13 1.47 1.47 0 0  1-1.46-1.42 1.52 1.52 0 0 1 .9-1.38 17.66 17.66 0 0 1 7.27-1.5c3.14 0 5.55.81 7.18 2.45a8.74 8.74 0 0 1  2.28 6.49v12.17a1.57 1.57 0 0 1-1.59 1.64 1.53 1.53 0 0 1-1.59-1.55v-2a9.75 9.75 0 0 1-8  3.82c-4.22-.02-8.34-2.38-8.34-6.94Zm16.38-1.72v-2.15a23.2 23.2 0 0 0-6.53-1c-4.17 0-6.5 1.81-6.5 4.6v.09c0 2.8 2.58 4.43 5.59 4.43 4.06.05 7.39-2.44 7.39-5.97ZM147.36 27.1V13.68h-1.81a1.51 1.51 0 0 1-1.46-1.46 1.47 1.47 0 0 1 1.46-1.46h1.81V5.51A1.65 1.65 0 0 1 149 3.83a1.72 1.72 0 0 1 1.68 1.68v5.25h5.76a1.52 1.52 0 0 1 1.51 1.46 1.49 1.49 0 0 1-1.51 1.46h-5.76v13c0 2.71 1.5 3.7 3.74 3.7a9.42 9.42 0 0 0 2-.3 1.43 1.43 0 0 1 1.42 1.42 1.39 1.39 0 0 1-.95 1.29 8.43 8.43 0 0 1-3.26.6c-3.56-.01-6.27-1.78-6.27-6.29ZM163.54 27.1V13.68h-1.81a1.51 1.51 0 0 1-1.46-1.46 1.47 1.47 0 0 1 1.46-1.46h1.81V5.51a1.64 1.64 0 0 1 1.63-1.68 1.72 1.72 0 0 1 1.68 1.68v5.25h5.76a1.51 1.51 0 0 1 1.5 1.46 1.48 1.48 0 0 1-1.5 1.46h-5.76v13c0 2.71 1.5 3.7 3.74 3.7a9.42 9.42 0 0 0 2-.3 1.43 1.43 0 0 1 1.41 1.41 1.39 1.39 0 0 1-.95 1.29 8.48 8.48 0 0 1-3.27.6c-3.54 0-6.24-1.77-6.24-6.28ZM186.16 33.51c-6.1 0-11.09-4.69-11.09-11.57v-.09c0-6.4 4.51-11.56 10.66-11.56 6.58 0 10.32 5.37 10.32 11.26a1.54 1.54 0 0 1-1.54 1.55h-16.09c.48 4.82 3.87 7.53 7.83 7.53a9.13 9.13 0 0 0 6.41-2.58 1.41 1.41 0 1 1 1.89 2.1 11.32 11.32 0 0 1-8.39 3.36Zm6.58-12.86c-.34-4-2.66-7.57-7.09-7.57-3.87 0-6.8 3.23-7.23 7.57ZM200.17 12.22a1.67 1.67 0 0 1 1.63-1.68 1.65 1.65 0 0 1 1.68 1.68v4.17c1.63-3.7 4.86-5.93 7.65-5.93a1.59 1.59 0 0 1 1.64 1.67 1.65 1.65 0 0 1-1.47 1.68c-4.3.52-7.82 3.74-7.82 10.15v7.57a1.66 1.66 0 1 1-3.31 0ZM235.69 20.34a.73.73 0 0 1-.51-.21.76.76 0 0 1 0-1.07 22.45 22.45 0 0 0 4.14-6.16.76.76 0 0 1 1.38.62 23.91 23.91 0 0 1-4.42 6.58.75.75 0 0 1-.59.24ZM228.52 22.13a.76.76 0 0 1-.37-1.42 19.52 19.52 0 0 0 10-14.93.76.76 0 0 1 .84-.67.75.75 0 0 1 .66.83A21 21 0 0 1 228.88 22a.77.77 0 0 1-.36.13Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M224.32 20.7a.76.76 0 0 1-.71-.51.75.75 0 0 1 .47-1 16.5 16.5 0 0 0 11.17-15.58v-1a.75.75 0 1 1 1.5-.1v1.13a18 18 0 0 1-12.19 17.05.73.73 0 0 1-.24.01ZM226.32 12.64a.79.79 0 0 1-.53-.22 18.07 18.07 0 0 1-4.73-8.12.76.76 0 0 1 1.46-.39 16.38 16.38 0 0 0 4.33 7.43.76.76 0 0 1-.53 1.3ZM220.68 15.41a.76.76 0 0 1-.57-.26c-.45-.53-.88-1.08-1.27-1.63a.77.77 0 0 1 .18-1.06.75.75 0 0 1 1 .18c.37.52.77 1 1.19 1.53a.75.75 0 0 1-.09 1.06.76.76 0 0 1-.44.18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M221.58 18.32a.75.75 0 0 1-.15-1.49 13.6 13.6 0 0 0 8.12-5.16A15 15 0 0 1 223.66 2a.74.74 0 0 1 .62-.86.76.76 0 0 1 .87.62 13.49 13.49 0 0 0 5.85 9.1.74.74 0 0 1 .33.48.77.77 0 0 1-.12.57 15.1 15.1 0 0 1-9.5 6.4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M223.81 14.37a.74.74 0 0 1-.55-.23 20.87 20.87 0 0 1-4.15-6.28.76.76 0 0 1 1.39-.59 19.52 19.52 0 0 0 3.85 5.83.75.75 0 0 1-.54 1.27ZM232 9.55a.76.76 0 0 1-.43-.14 12 12 0 0 1-5-8.58.77.77 0 0 1 .68-.83.75.75 0 0 1 .82.68 10.46 10.46 0 0 0 3.61 6.87 13.37 13.37 0 0 0 .58-3.94 13.7 13.7 0 0 0-.26-2.56.75.75 0 0 1 1.48-.29 15.12 15.12 0 0 1 .27 2.85 15 15 0 0 1-1 5.46.77.77 0 0 1-.49.44.54.54 0 0 1-.26.04Z"
  })));
};
YouMatterLogo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string
};
YouMatterLogo.defaultProps = {
  width: null,
  height: null,
  color: '#222'
};