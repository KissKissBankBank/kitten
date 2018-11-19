"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonQuestionMarkIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _questionMarkIcon = require("kitten/components/icons/question-mark-icon");

var _buttonIcon = require("kitten/components/buttons/button-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ButtonQuestionMarkIcon = function ButtonQuestionMarkIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, _extends({
    className: "k-ButtonIcon--tooltip--nano",
    modifier: "helium",
    size: "nano",
    rounded: true
  }, props), _react.default.createElement(_questionMarkIcon.QuestionMarkIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.ButtonQuestionMarkIcon = ButtonQuestionMarkIcon;