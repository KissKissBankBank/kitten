"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinterestButtonIcon = exports.YoutubeButtonIcon = exports.InstagramButtonIcon = exports.LinkedinButtonIcon = exports.TwitterButtonIcon = exports.FacebookButtonIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _buttonIcon = require("kitten/components/buttons/button-icon");

var _facebookIcon = require("kitten/components/icons/facebook-icon");

var _twitterIcon = require("kitten/components/icons/twitter-icon");

var _linkedinIcon = require("kitten/components/icons/linkedin-icon");

var _instagramIcon = require("kitten/components/icons/instagram-icon");

var _youtubeIcon = require("kitten/components/icons/youtube-icon");

var _pinterestIcon = require("kitten/components/icons/pinterest-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FacebookButtonIcon = function FacebookButtonIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, _extends({}, props, {
    modifier: "facebook",
    "aria-label": "Facebook"
  }), _react.default.createElement(_facebookIcon.FacebookIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.FacebookButtonIcon = FacebookButtonIcon;

var TwitterButtonIcon = function TwitterButtonIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, _extends({}, props, {
    modifier: "twitter",
    "aria-label": "Twitter"
  }), _react.default.createElement(_twitterIcon.TwitterIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.TwitterButtonIcon = TwitterButtonIcon;

var LinkedinButtonIcon = function LinkedinButtonIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, _extends({}, props, {
    modifier: "linkedin",
    "aria-label": "LinkedIn"
  }), _react.default.createElement(_linkedinIcon.LinkedinIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.LinkedinButtonIcon = LinkedinButtonIcon;

var InstagramButtonIcon = function InstagramButtonIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, _extends({}, props, {
    modifier: "instagram",
    "aria-label": "Instagram"
  }), _react.default.createElement(_instagramIcon.InstagramIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.InstagramButtonIcon = InstagramButtonIcon;

var YoutubeButtonIcon = function YoutubeButtonIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, _extends({}, props, {
    modifier: "youtube",
    "aria-label": "Youtube"
  }), _react.default.createElement(_youtubeIcon.YoutubeIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.YoutubeButtonIcon = YoutubeButtonIcon;

var PinterestButtonIcon = function PinterestButtonIcon(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, _extends({}, props, {
    modifier: "pinterest",
    "aria-label": "Pinterest"
  }), _react.default.createElement(_pinterestIcon.PinterestIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.PinterestButtonIcon = PinterestButtonIcon;