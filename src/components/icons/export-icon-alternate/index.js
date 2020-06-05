"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportIconAlternate = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ExportIconAlternate = function ExportIconAlternate(_ref) {
  var color = _ref.color,
      iconTitle = _ref.iconTitle,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "iconTitle", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    role: "img",
    "aria-label": iconTitle || title,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12",
    width: "12",
    height: "12",
    fill: color
  }, props), title !== '' && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "2"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "6",
    y: "0",
    width: "6",
    height: "2"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "4",
    y: "3",
    width: "8",
    height: "2",
    transform: "rotate(-45 8 4)"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "2",
    height: "12"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0",
    y: "10",
    width: "12",
    height: "2"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "10",
    y: "8",
    width: "2",
    height: "4"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "10",
    y: "0",
    width: "2",
    height: "6"
  }));
};

exports.ExportIconAlternate = ExportIconAlternate;
ExportIconAlternate.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ExportIconAlternate.defaultProps = {
  color: '#000',
  title: ''
};