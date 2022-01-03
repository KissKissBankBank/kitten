"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.YoutubeButtonIcon = exports.TwitterButtonIcon = exports.LinkedinButtonIcon = exports.InstagramButtonIcon = exports.FacebookButtonIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = require("../../../../components/molecules/buttons/button");

var _facebookIcon = require("../../../../components/graphics/icons/facebook-icon");

var _twitterIcon = require("../../../../components/graphics/icons/twitter-icon");

var _linkedinIcon = require("../../../../components/graphics/icons/linkedin-icon");

var _instagramIcon = require("../../../../components/graphics/icons/instagram-icon");

var _youtubeIcon = require("../../../../components/graphics/icons/youtube-icon");

var FacebookButtonIcon = function FacebookButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_facebookIcon.FacebookIcon, {
    width: "14",
    height: "14"
  }));
};

exports.FacebookButtonIcon = FacebookButtonIcon;

var TwitterButtonIcon = function TwitterButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_twitterIcon.TwitterIcon, {
    width: "15",
    height: "15"
  }));
};

exports.TwitterButtonIcon = TwitterButtonIcon;

var LinkedinButtonIcon = function LinkedinButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_linkedinIcon.LinkedinIcon, {
    width: "12",
    height: "12"
  }));
};

exports.LinkedinButtonIcon = LinkedinButtonIcon;

var InstagramButtonIcon = function InstagramButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_instagramIcon.InstagramIcon, {
    width: "16",
    height: "16"
  }));
};

exports.InstagramButtonIcon = InstagramButtonIcon;

var YoutubeButtonIcon = function YoutubeButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_youtubeIcon.YoutubeIcon, {
    width: "16",
    height: "16"
  }));
};

exports.YoutubeButtonIcon = YoutubeButtonIcon;
var defaultProps = {
  modifier: 'beryllium',
  fit: 'icon'
};
FacebookButtonIcon.defaultProps = defaultProps;
TwitterButtonIcon.defaultProps = defaultProps;
LinkedinButtonIcon.defaultProps = defaultProps;
InstagramButtonIcon.defaultProps = defaultProps;
YoutubeButtonIcon.defaultProps = defaultProps;