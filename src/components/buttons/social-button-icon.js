"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinterestButtonIcon = exports.YoutubeButtonIcon = exports.InstagramButtonIcon = exports.LinkedinButtonIcon = exports.TwitterButtonIcon = exports.FacebookButtonIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _buttonIcon = require("../../components/buttons/button-icon");

var _facebookIcon = require("../../components/icons/facebook-icon");

var _twitterIcon = require("../../components/icons/twitter-icon");

var _linkedinIcon = require("../../components/icons/linkedin-icon");

var _instagramIcon = require("../../components/icons/instagram-icon");

var _youtubeIcon = require("../../components/icons/youtube-icon");

var _pinterestIcon = require("../../components/icons/pinterest-icon");

var FacebookButtonIcon = function FacebookButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "facebook"
  }), /*#__PURE__*/_react.default.createElement(_facebookIcon.FacebookIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.FacebookButtonIcon = FacebookButtonIcon;

var TwitterButtonIcon = function TwitterButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "twitter"
  }), /*#__PURE__*/_react.default.createElement(_twitterIcon.TwitterIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.TwitterButtonIcon = TwitterButtonIcon;

var LinkedinButtonIcon = function LinkedinButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "linkedin"
  }), /*#__PURE__*/_react.default.createElement(_linkedinIcon.LinkedinIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.LinkedinButtonIcon = LinkedinButtonIcon;

var InstagramButtonIcon = function InstagramButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "instagram"
  }), /*#__PURE__*/_react.default.createElement(_instagramIcon.InstagramIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.InstagramButtonIcon = InstagramButtonIcon;

var YoutubeButtonIcon = function YoutubeButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "youtube"
  }), /*#__PURE__*/_react.default.createElement(_youtubeIcon.YoutubeIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.YoutubeButtonIcon = YoutubeButtonIcon;

var PinterestButtonIcon = function PinterestButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "pinterest"
  }), /*#__PURE__*/_react.default.createElement(_pinterestIcon.PinterestIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.PinterestButtonIcon = PinterestButtonIcon;