"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonQuestionMarkIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _button = require("../../../components/buttons/button");

var _questionMarkIcon = require("../../../components/icons/question-mark-icon");

var ButtonQuestionMarkIcon = function ButtonQuestionMarkIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    modifier: "helium",
    size: "nano",
    rounded: true,
    icon: true,
    type: "button"
  }, props), /*#__PURE__*/_react.default.createElement(_questionMarkIcon.QuestionMarkIcon, {
    width: "10",
    height: "10"
  }));
};

exports.ButtonQuestionMarkIcon = ButtonQuestionMarkIcon;