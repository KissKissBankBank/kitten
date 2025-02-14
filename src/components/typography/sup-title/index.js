"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SupTitle = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _text = require("../../typography/text");

const SupTitle = props => /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
  size: "small",
  lineHeight: "normal",
  transform: "uppercase",
  weight: "700"
}, props));

exports.SupTitle = SupTitle;
SupTitle.defaultProps = {
  children: 'Lorem ipsum'
};