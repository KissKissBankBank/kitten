"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedinButtonIconWords = exports.TwitterButtonIconWords = exports.FacebookButtonIconWords = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _button = require("../../components/buttons/button");

var _facebookIcon = require("../../components/icons/facebook-icon");

var _twitterIcon = require("../../components/icons/twitter-icon");

var _linkedinIcon = require("../../components/icons/linkedin-icon");

var FacebookButtonIconWords = function FacebookButtonIconWords(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    icon: true,
    size: "big",
    modifier: "facebook"
  }, props), /*#__PURE__*/_react.default.createElement(_facebookIcon.FacebookIcon, {
    className: "k-Button__icon"
  }), children);
};

exports.FacebookButtonIconWords = FacebookButtonIconWords;

var TwitterButtonIconWords = function TwitterButtonIconWords(_ref2) {
  var children = _ref2.children,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children"]);
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    icon: true,
    size: "big",
    modifier: "twitter"
  }, props), /*#__PURE__*/_react.default.createElement(_twitterIcon.TwitterIcon, {
    className: "k-Button__icon"
  }), children);
};

exports.TwitterButtonIconWords = TwitterButtonIconWords;

var LinkedinButtonIconWords = function LinkedinButtonIconWords(_ref3) {
  var children = _ref3.children,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["children"]);
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    icon: true,
    size: "big",
    modifier: "linkedin"
  }, props), /*#__PURE__*/_react.default.createElement(_linkedinIcon.LinkedinIcon, {
    className: "k-Button__icon"
  }), children);
};

exports.LinkedinButtonIconWords = LinkedinButtonIconWords;