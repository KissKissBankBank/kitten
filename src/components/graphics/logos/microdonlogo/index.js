"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MicrodonLogo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ratio = require("../../../../helpers/utils/ratio");

var _excluded = ["color1", "color2", "width", "height"];

var MicrodonLogo = function MicrodonLogo(_ref) {
  var color1 = _ref.color1,
      color2 = _ref.color2,
      width = _ref.width,
      height = _ref.height,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var DEFAULT_WIDTH = 339.18;
  var DEFAULT_HEIGHT = 64.02;
  var computed = (0, _ratio.computeFromRatio)({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width: width,
    height: height
  });
  var viewBox = {
    x: DEFAULT_WIDTH,
    y: DEFAULT_HEIGHT
  };
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    role: "img",
    "aria-label": "Microdon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 ".concat(viewBox.x, " ").concat(viewBox.y),
    width: computed.width,
    height: computed.height
  }, props), /*#__PURE__*/_react.default.createElement("title", null, "Microdon"), /*#__PURE__*/_react.default.createElement("path", {
    fill: color1,
    d: "M93.73 24.92H104V64H93.73zm40.71 12.93a9.09 9.09 0 00-6.56-2.55 8.87 8.87 0 00-9.18 9.17A9.29 9.29 0 00134.44 51l7.3 7.19a19.55 19.55 0 11-.1-27.63zM169.64 64l-6-10.38h-6.36V64H147V24.92h16.47a14.35 14.35 0 019.75 24.92L181.47 64zm-12.41-19.22h6.36a5.6 5.6 0 100-11.2h-6.36zm44.36-19.86a19.55 19.55 0 11-19.49 19.6 19.6 19.6 0 0119.49-19.6zm0 10.22a9.33 9.33 0 109.33 9.33 9.31 9.31 0 00-9.33-9.33zM83.87 24.92L68 39.41 54 26.68a20.86 20.86 0 01-1.6 3.51 21.34 21.34 0 01-5 5.84V64h10.3V44L68 53.28 78.19 44v20h10.32V24.92z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color2,
    d: "M225.68 24.92h14.5a19.55 19.55 0 010 39.1h-14.5zM235.9 53.8h4.33a9.25 9.25 0 100-18.5h-4.33zm46.24-28.88a19.55 19.55 0 11-19.49 19.6 19.6 19.6 0 0119.49-19.6zm0 10.22a9.33 9.33 0 109.33 9.33 9.31 9.31 0 00-9.33-9.33zM335 64l-18.5-18.49V64h-10.27V24.92h4.17l18.51 18.46V24.92h10.27V64z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color1,
    d: "M43.65 2.62a19.53 19.53 0 01-5.51 36 19.38 19.38 0 00-8.84-11 9.27 9.27 0 10-3.43-12.72 7.88 7.88 0 00-.4.76l-.15.35a1.11 1.11 0 00-.07.16 17.43 17.43 0 001.15 15.39c.18.3.37.61.58.9a17.47 17.47 0 012.18 6 17.25 17.25 0 01-.91 9.07 9.26 9.26 0 00-4.11-11.1 19.46 19.46 0 01-8.85-11q-.18-.6-.33-1.2A19.52 19.52 0 0143.65 2.62z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color2,
    d: "M25.25 16.17a9.27 9.27 0 004 11.38h.05a19.38 19.38 0 018.84 11c.14.41.25.83.36 1.25a19.53 19.53 0 11-23.23-14.37 19.46 19.46 0 008.85 11 9.26 9.26 0 103.44 12.68l.22-.41v-.06a7.9 7.9 0 00.46-1.09 17.25 17.25 0 00.91-9.07 17.47 17.47 0 00-2.18-6c-.18-.31-.38-.61-.58-.9a17.43 17.43 0 01-1.15-15.39z"
  }));
};

exports.MicrodonLogo = MicrodonLogo;
MicrodonLogo.propTypes = {
  color: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
MicrodonLogo.defaultProps = {
  color1: '#44c7f4',
  color2: '#037bc0',
  width: null,
  height: null
};