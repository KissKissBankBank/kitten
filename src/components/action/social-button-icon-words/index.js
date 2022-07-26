"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TwitterButtonIconWords = exports.LinkedinButtonIconWords = exports.InstagramButtonIconWords = exports.FacebookButtonIconWords = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = require("../../action/button");

var _facebookIcon = require("../../graphics/icons/facebook-icon");

var _twitterIcon = require("../../graphics/icons/twitter-icon");

var _linkedinIcon = require("../../graphics/icons/linkedin-icon");

var _instagramIcon = require("../../graphics/icons/instagram-icon");

const FacebookButtonIconWords = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_facebookIcon.FacebookIcon, {
    height: "14",
    width: "7"
  }), /*#__PURE__*/_react.default.createElement("span", null, children));
};

exports.FacebookButtonIconWords = FacebookButtonIconWords;

const TwitterButtonIconWords = _ref2 => {
  let {
    children,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_twitterIcon.TwitterIcon, {
    height: "12",
    width: "15"
  }), /*#__PURE__*/_react.default.createElement("span", null, children));
};

exports.TwitterButtonIconWords = TwitterButtonIconWords;

const InstagramButtonIconWords = _ref3 => {
  let {
    children,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_instagramIcon.InstagramIcon, {
    height: "16",
    width: "16"
  }), /*#__PURE__*/_react.default.createElement("span", null, children));
};

exports.InstagramButtonIconWords = InstagramButtonIconWords;

const LinkedinButtonIconWords = _ref4 => {
  let {
    children,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_linkedinIcon.LinkedinIcon, {
    height: "12",
    width: "12"
  }), /*#__PURE__*/_react.default.createElement("span", null, children));
};

exports.LinkedinButtonIconWords = LinkedinButtonIconWords;
const defaultProps = {
  modifier: 'beryllium'
};
FacebookButtonIconWords.defaultProps = defaultProps;
TwitterButtonIconWords.defaultProps = defaultProps;
LinkedinButtonIconWords.defaultProps = defaultProps;
InstagramButtonIconWords.defaultProps = defaultProps;