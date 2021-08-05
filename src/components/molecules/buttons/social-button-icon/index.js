"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinterestButtonIcon = exports.YoutubeButtonIcon = exports.InstagramButtonIcon = exports.LinkedinButtonIcon = exports.TwitterButtonIcon = exports.FacebookButtonIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _button = require("../../../../components/molecules/buttons/button");

var _facebookIcon = require("../../../../components/graphics/icons/facebook-icon");

var _twitterIcon = require("../../../../components/graphics/icons/twitter-icon");

var _linkedinIcon = require("../../../../components/graphics/icons/linkedin-icon");

var _instagramIcon = require("../../../../components/graphics/icons/instagram-icon");

var _youtubeIcon = require("../../../../components/graphics/icons/youtube-icon");

var _pinterestIcon = require("../../../../components/graphics/icons/pinterest-icon");

var FacebookButtonIcon = function FacebookButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    modifier: "social_facebook",
    icon: true
  }), /*#__PURE__*/_react.default.createElement(_facebookIcon.FacebookIcon, {
    width: "14",
    height: "14"
  }));
};

exports.FacebookButtonIcon = FacebookButtonIcon;

var TwitterButtonIcon = function TwitterButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    modifier: "social_twitter",
    icon: true
  }), /*#__PURE__*/_react.default.createElement(_twitterIcon.TwitterIcon, {
    width: "15",
    height: "15"
  }));
};

exports.TwitterButtonIcon = TwitterButtonIcon;

var LinkedinButtonIcon = function LinkedinButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    modifier: "social_linkedin",
    icon: true
  }), /*#__PURE__*/_react.default.createElement(_linkedinIcon.LinkedinIcon, {
    width: "12",
    height: "12"
  }));
};

exports.LinkedinButtonIcon = LinkedinButtonIcon;

var InstagramButtonIcon = function InstagramButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    modifier: "social_instagram",
    icon: true
  }), /*#__PURE__*/_react.default.createElement(_instagramIcon.InstagramIcon, {
    width: "16",
    height: "16"
  }));
};

exports.InstagramButtonIcon = InstagramButtonIcon;

var YoutubeButtonIcon = function YoutubeButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    modifier: "social_youtube",
    icon: true
  }), /*#__PURE__*/_react.default.createElement(_youtubeIcon.YoutubeIcon, {
    width: "16",
    height: "16"
  }));
};

exports.YoutubeButtonIcon = YoutubeButtonIcon;

var PinterestButtonIcon = function PinterestButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    modifier: "social_pinterest",
    icon: true
  }), /*#__PURE__*/_react.default.createElement(_pinterestIcon.PinterestIcon, {
    width: "16",
    height: "16"
  }));
};

exports.PinterestButtonIcon = PinterestButtonIcon;