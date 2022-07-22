"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextInputWithUnit = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _textInput = require("../../../form/input/text-input");

const TextInputWithUnit = _ref => {
  let {
    unitWord,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({}, props, {
    has: "unit",
    unitIsWord: unitWord
  }));
};

exports.TextInputWithUnit = TextInputWithUnit;