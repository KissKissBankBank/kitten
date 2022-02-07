"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SupTitle = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _text = require("../../typography/text");

var SupTitle = function SupTitle(props) {
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    size: "tiny",
    lineHeight: "normal",
    transform: "uppercase",
    weight: "bold"
  }, props));
};

exports.SupTitle = SupTitle;
SupTitle.defaultProps = {
  children: 'Lorem ipsum'
};