"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldError = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _text = require("../../../atoms/typography/text");

var _excluded = ["children"];

var FieldError = function FieldError(_ref) {
  var children = _ref.children,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-margin-top-single"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "p",
    color: "error",
    size: "micro",
    weight: "regular",
    lineHeight: "normal",
    style: {
      margin: 0
    }
  }, others), children));
};

exports.FieldError = FieldError;