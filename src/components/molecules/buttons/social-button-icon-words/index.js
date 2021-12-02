"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TwitterButtonIconWords = exports.LinkedinButtonIconWords = exports.InstagramButtonIconWords = exports.FacebookButtonIconWords = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _button = require("../../../../components/molecules/buttons/button");

var _facebookIcon = require("../../../../components/graphics/icons/facebook-icon");

var _twitterIcon = require("../../../../components/graphics/icons/twitter-icon");

var _linkedinIcon = require("../../../../components/graphics/icons/linkedin-icon");

var _instagramIcon = require("../../../../components/graphics/icons/instagram-icon");

var _excluded = ["children"],
    _excluded2 = ["children"],
    _excluded3 = ["children"],
    _excluded4 = ["children"];

var FacebookButtonIconWords = function FacebookButtonIconWords(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    modifier: "social_facebook"
  }), /*#__PURE__*/_react.default.createElement(_facebookIcon.FacebookIcon, {
    height: "14",
    width: "7"
  }), /*#__PURE__*/_react.default.createElement("span", null, children));
};

exports.FacebookButtonIconWords = FacebookButtonIconWords;

var TwitterButtonIconWords = function TwitterButtonIconWords(_ref2) {
  var children = _ref2.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    modifier: "social_twitter"
  }), /*#__PURE__*/_react.default.createElement(_twitterIcon.TwitterIcon, {
    height: "12",
    width: "15"
  }), /*#__PURE__*/_react.default.createElement("span", null, children));
};

exports.TwitterButtonIconWords = TwitterButtonIconWords;

var InstagramButtonIconWords = function InstagramButtonIconWords(_ref3) {
  var children = _ref3.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    modifier: "social_instagram"
  }), /*#__PURE__*/_react.default.createElement(_instagramIcon.InstagramIcon, {
    height: "16",
    width: "16"
  }), /*#__PURE__*/_react.default.createElement("span", null, children));
};

exports.InstagramButtonIconWords = InstagramButtonIconWords;

var LinkedinButtonIconWords = function LinkedinButtonIconWords(_ref4) {
  var children = _ref4.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded4);
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    modifier: "social_linkedin"
  }), /*#__PURE__*/_react.default.createElement(_linkedinIcon.LinkedinIcon, {
    height: "12",
    width: "12"
  }), /*#__PURE__*/_react.default.createElement("span", null, children));
};

exports.LinkedinButtonIconWords = LinkedinButtonIconWords;