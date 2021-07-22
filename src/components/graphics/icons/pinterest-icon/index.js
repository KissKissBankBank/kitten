"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinterestIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var PinterestIcon = function PinterestIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 121.3 156.8",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M64.3 0C21.6 0 0 30.7 0 56.2c0 15.5 5.9 29.3 18.4 34.4 2.1.8 3.9 0 4.5-2.3l1.8-7.2c.6-2.3.4-3.1-1.3-5-3.6-4.3-5.9-9.8-5.9-17.7 0-22.8 17-43.1 44.3-43.1 24.2 0 37.5 14.8 37.5 34.5 0 26-11.5 47.9-28.5 47.9-9.4 0-16.5-7.8-14.2-17.3 2.7-11.4 7.9-23.7 7.9-31.9 0-7.4-4-13.5-12.1-13.5C42.8 35 35 45 35 58.3c0 8.5 2.9 14.2 2.9 14.2s-9.9 41.8-11.6 49.1c-3.4 14.6-.5 32.4-.3 34.2.1 1.1 1.5 1.3 2.1.5.9-1.2 12.4-15.3 16.3-29.5 1.1-4 6.3-24.7 6.3-24.7 3.1 6 12.3 11.2 22 11.2 28.9 0 48.6-26.4 48.6-61.7 0-26.7-22.6-51.6-57-51.6z"
  }));
};

exports.PinterestIcon = PinterestIcon;
PinterestIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
PinterestIcon.defaultProps = {
  color: '#fff',
  title: ''
};