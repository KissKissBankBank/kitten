"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedinButtonIconWords = exports.TwitterButtonIconWords = exports.FacebookButtonIconWords = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = require("kitten/components/buttons/button");

var _facebookIconWithBackground = require("kitten/components/icons/facebook-icon-with-background");

var _twitterIcon = require("kitten/components/icons/twitter-icon");

var _linkedinIcon = require("kitten/components/icons/linkedin-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FacebookButtonIconWords = function FacebookButtonIconWords(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_button.Button, _extends({
    icon: true,
    modifier: "facebook"
  }, props), _react.default.createElement(_facebookIconWithBackground.FacebookIconWithBackground, {
    className: "k-Button__icon k-Button__icon--facebook"
  }), children);
};

exports.FacebookButtonIconWords = FacebookButtonIconWords;

var TwitterButtonIconWords = function TwitterButtonIconWords(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return _react.default.createElement(_button.Button, _extends({
    icon: true,
    size: "big",
    modifier: "twitter"
  }, props), _react.default.createElement(_twitterIcon.TwitterIcon, {
    className: "k-Button__icon"
  }), children);
};

exports.TwitterButtonIconWords = TwitterButtonIconWords;

var LinkedinButtonIconWords = function LinkedinButtonIconWords(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["children"]);

  return _react.default.createElement(_button.Button, _extends({
    icon: true,
    size: "big",
    modifier: "linkedin"
  }, props), _react.default.createElement(_linkedinIcon.LinkedinIcon, {
    className: "k-Button__icon"
  }), children);
};

exports.LinkedinButtonIconWords = LinkedinButtonIconWords;