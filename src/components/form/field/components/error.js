"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldError = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../typography/text");

const FieldError = _ref => {
  let {
    children,
    className,
    ...others
  } = _ref;
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