"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldError = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../typography/text");

var _excluded = ["children", "className"];

var FieldError = function FieldError(_ref) {
  var children = _ref.children,
      className = _ref.className,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "p",
    color: "error",
    size: "micro",
    weight: "500",
    lineHeight: "normal",
    className: (0, _classnames.default)(className, 'k-Field__error', 'k-u-margin-none k-u-margin-top-single')
  }, others), children);
};

exports.FieldError = FieldError;