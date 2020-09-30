"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var FilterIcon = function FilterIcon(_ref) {
  var color = _ref.color,
      duration = _ref.duration,
      type = _ref.type,
      name = _ref.name,
      begin = _ref.begin,
      animated = _ref.animated,
      title = _ref.title,
      others = (0, _objectWithoutProperties2.default)(_ref, ["color", "duration", "type", "name", "begin", "animated", "title"]);
  var animationDuration = animated ? duration : 0;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "20px",
    height: "24px",
    viewBox: "0 0 20 24",
    fill: color
  }, others), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("rect", {
    x: "2",
    width: "2",
    height: "10"
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeType: type,
    attributeName: name,
    values: "-4; 0; -4",
    begin: begin,
    dur: animationDuration,
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react.default.createElement("rect", {
    x: "2",
    y: "14",
    width: "2",
    height: "10"
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeType: type,
    attributeName: name,
    values: "14; 18; 14",
    begin: begin,
    dur: animationDuration,
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4,9v2H2V9H4 M6,7H0v6h6V7L6,7z"
  }, /*#__PURE__*/_react.default.createElement("animateTransform", {
    attributeType: type,
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 4; 0 0",
    begin: begin,
    dur: animationDuration,
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react.default.createElement("rect", {
    x: "9",
    width: "2",
    height: "14"
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeType: type,
    attributeName: name,
    values: "0; -12; 0",
    begin: begin,
    dur: animationDuration,
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react.default.createElement("rect", {
    x: "9",
    y: "22",
    width: "2",
    height: "14"
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeType: type,
    attributeName: name,
    values: "22; 10; 22",
    begin: begin,
    dur: animationDuration,
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11,17v2H9v-2H11 M13,15H7v6h6V15L13,15z"
  }, /*#__PURE__*/_react.default.createElement("animateTransform", {
    attributeType: type,
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 -12; 0 0",
    begin: begin,
    dur: animationDuration,
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react.default.createElement("rect", {
    x: "16",
    width: "2",
    height: "12"
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeType: type,
    attributeName: name,
    values: "-8; 0; -8",
    begin: begin,
    dur: animationDuration,
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react.default.createElement("rect", {
    x: "16",
    y: "12",
    width: "2",
    height: "12"
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeType: type,
    attributeName: name,
    values: "12; 20; 12",
    begin: begin,
    dur: animationDuration,
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18,7v2h-2V7H18 M20,5h-6v6h6V5L20,5z"
  }, /*#__PURE__*/_react.default.createElement("animateTransform", {
    attributeType: type,
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 8; 0 0",
    begin: begin,
    dur: animationDuration,
    repeatCount: "indefinite"
  })));
};

exports.FilterIcon = FilterIcon;
FilterIcon.defaultProps = {
  color: _colorsConfig.default.font1,
  duration: '1.5s',
  animated: false,
  type: 'xml',
  name: 'y',
  begin: '0',
  title: ''
};