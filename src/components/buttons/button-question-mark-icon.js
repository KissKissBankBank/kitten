"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonQuestionMarkIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _questionMarkIcon = require("../../components/icons/question-mark-icon");

var _buttonIcon = require("../../components/buttons/button-icon");

var ButtonQuestionMarkIcon = function ButtonQuestionMarkIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({
    className: "k-ButtonIcon--tooltip--nano",
    modifier: "helium",
    size: "nano",
    type: "button",
    rounded: true
  }, props), /*#__PURE__*/_react.default.createElement(_questionMarkIcon.QuestionMarkIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.ButtonQuestionMarkIcon = ButtonQuestionMarkIcon;