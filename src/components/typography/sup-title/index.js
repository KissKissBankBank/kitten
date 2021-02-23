"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupTitle = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _text = require("../../../components/typography/text");

var SupTitle = function SupTitle(textProps) {
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    size: "tiny",
    lineHeigth: "normal",
    transform: "uppercase",
    weight: "bold"
  }, textProps));
};

exports.SupTitle = SupTitle;
SupTitle.defaultProps = {
  children: 'Lorem ipsum'
};