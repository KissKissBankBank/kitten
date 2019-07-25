"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BubbleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var BubbleIcon = function BubbleIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    width: "14",
    height: "12",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M3.417 11.155L1.5 12.732l.431-2.594C.735 9.062 0 7.604 0 6c0-3.314 3.134-6 7-6s7 2.686 7 6-3.134 6-7 6a7.865 7.865 0 0 1-3.583-.845z",
    fillRule: "evenodd"
  }));
};

exports.BubbleIcon = BubbleIcon;
BubbleIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
BubbleIcon.defaultProps = {
  color: '#222',
  title: ''
};