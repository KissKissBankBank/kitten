"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.YoutubeButtonIcon = exports.TwitterButtonIcon = exports.LinkedinButtonIcon = exports.InstagramButtonIcon = exports.FacebookButtonIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = require("../../action/button");

var _facebookIcon = require("../../graphics/icons/facebook-icon");

var _twitterIcon = require("../../graphics/icons/twitter-icon");

var _linkedinIcon = require("../../graphics/icons/linkedin-icon");

var _instagramIcon = require("../../graphics/icons/instagram-icon");

var _youtubeIcon = require("../../graphics/icons/youtube-icon");

const FacebookButtonIcon = props => /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_facebookIcon.FacebookIcon, {
  width: "14",
  height: "14"
}));

exports.FacebookButtonIcon = FacebookButtonIcon;

const TwitterButtonIcon = props => /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_twitterIcon.TwitterIcon, {
  width: "15",
  height: "15"
}));

exports.TwitterButtonIcon = TwitterButtonIcon;

const LinkedinButtonIcon = props => /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_linkedinIcon.LinkedinIcon, {
  width: "12",
  height: "12"
}));

exports.LinkedinButtonIcon = LinkedinButtonIcon;

const InstagramButtonIcon = props => /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_instagramIcon.InstagramIcon, {
  width: "16",
  height: "16"
}));

exports.InstagramButtonIcon = InstagramButtonIcon;

const YoutubeButtonIcon = props => /*#__PURE__*/_react.default.createElement(_button.Button, props, /*#__PURE__*/_react.default.createElement(_youtubeIcon.YoutubeIcon, {
  width: "16",
  height: "16"
}));

exports.YoutubeButtonIcon = YoutubeButtonIcon;
const defaultProps = {
  modifier: 'beryllium',
  fit: 'icon'
};
FacebookButtonIcon.defaultProps = defaultProps;
TwitterButtonIcon.defaultProps = defaultProps;
LinkedinButtonIcon.defaultProps = defaultProps;
InstagramButtonIcon.defaultProps = defaultProps;
YoutubeButtonIcon.defaultProps = defaultProps;