"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonQuestionMarkIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _questionMarkIcon = require("kitten/components/icons/question-mark-icon");

var _buttonIcon = require("kitten/components/buttons/button-icon");

var ButtonQuestionMarkIcon = function ButtonQuestionMarkIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({
    className: "k-ButtonIcon--tooltip--nano",
    modifier: "helium",
    size: "nano",
    rounded: true
  }, props), _react.default.createElement(_questionMarkIcon.QuestionMarkIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.ButtonQuestionMarkIcon = ButtonQuestionMarkIcon;