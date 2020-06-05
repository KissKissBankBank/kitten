"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LockIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _ratio = require("../../../helpers/utils/ratio");

var DEFAULT_WIDTH = 14;
var DEFAULT_HEIGHT = 18;

var LockIcon = function LockIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      width = _ref.width,
      height = _ref.height,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title", "width", "height"]);
  var computed = (0, _ratio.computeFromRatio)({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width: width,
    height: height
  });
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 18",
    width: computed.width,
    height: computed.height,
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5,6 L9,6 L9,4 C9,2.8954305 8.1045695,2 7,2 C5.8954305,2 5,2.8954305 5,4 L5,6 Z M11,6 L14,6 L14,18 L0,18 L0,6 L3,6 L3,4 C3,1.790861 4.790861,0 7,0 C9.209139,0 11,1.790861 11,4 L11,6 Z M6.5,11.9146471 L6.5,14.5 C6.5,14.7761424 6.72385763,15 7,15 C7.27614237,15 7.5,14.7761424 7.5,14.5 L7.5,11.9146471 C8.08259619,11.7087289 8.5,11.1531094 8.5,10.5 C8.5,9.67157288 7.82842712,9 7,9 C6.17157288,9 5.5,9.67157288 5.5,10.5 C5.5,11.1531094 5.91740381,11.7087289 6.5,11.9146471 Z"
  }));
};

exports.LockIcon = LockIcon;
LockIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
LockIcon.defaultProps = {
  color: _colorsConfig.default.background1
};