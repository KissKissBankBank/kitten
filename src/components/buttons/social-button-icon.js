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
  return _react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "facebook",
    "aria-label": "Facebook"
  }), _react.default.createElement(_facebookIcon.FacebookIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.FacebookButtonIcon = FacebookButtonIcon;

var TwitterButtonIcon = function TwitterButtonIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "twitter",
    "aria-label": "Twitter"
  }), _react.default.createElement(_twitterIcon.TwitterIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.TwitterButtonIcon = TwitterButtonIcon;

var LinkedinButtonIcon = function LinkedinButtonIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "linkedin"
  }), _react.default.createElement(_linkedinIcon.LinkedinIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.LinkedinButtonIcon = LinkedinButtonIcon;

var InstagramButtonIcon = function InstagramButtonIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "instagram",
    "aria-label": "Instagram"
  }), _react.default.createElement(_instagramIcon.InstagramIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.InstagramButtonIcon = InstagramButtonIcon;

var YoutubeButtonIcon = function YoutubeButtonIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "youtube",
    "aria-label": "Youtube"
  }), _react.default.createElement(_youtubeIcon.YoutubeIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.YoutubeButtonIcon = YoutubeButtonIcon;

var PinterestButtonIcon = function PinterestButtonIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({}, props, {
    modifier: "pinterest",
    "aria-label": "Pinterest"
  }), _react.default.createElement(_pinterestIcon.PinterestIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.PinterestButtonIcon = PinterestButtonIcon;
