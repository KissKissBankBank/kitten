"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlButtonIconWordsRight = exports.KarlButtonIconWordsLeft = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = require("kitten/components/buttons/button");

var _heartIcon = require("kitten/components/icons/heart-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var KarlButtonIconWordsLeft = function KarlButtonIconWordsLeft(props) {
  return _react.default.createElement(_button.Button, _extends({
    icon: true
  }, props), _react.default.createElement(_heartIcon.HeartIcon, {
    className: "k-Button__icon"
  }), "Button");
};

exports.KarlButtonIconWordsLeft = KarlButtonIconWordsLeft;

var KarlButtonIconWordsRight = function KarlButtonIconWordsRight(props) {
  return _react.default.createElement(_button.Button, _extends({
    icon: true,
    iconOnRight: true
  }, props), "Button", _react.default.createElement(_heartIcon.HeartIcon, {
    className: "k-Button__icon"
  }));
};

exports.KarlButtonIconWordsRight = KarlButtonIconWordsRight;