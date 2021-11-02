import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Button } from '../../../../components/molecules/buttons/button';
import { FacebookIcon } from '../../../../components/graphics/icons/facebook-icon';
import { TwitterIcon } from '../../../../components/graphics/icons/twitter-icon';
import { LinkedinIcon } from '../../../../components/graphics/icons/linkedin-icon';
import { InstagramIcon } from '../../../../components/graphics/icons/instagram-icon';
import { YoutubeIcon } from '../../../../components/graphics/icons/youtube-icon';
export var FacebookButtonIcon = function FacebookButtonIcon(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    modifier: "social_facebook",
    fit: "icon"
  }), /*#__PURE__*/React.createElement(FacebookIcon, {
    width: "14",
    height: "14"
  }));
};
export var TwitterButtonIcon = function TwitterButtonIcon(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    modifier: "social_twitter",
    fit: "icon"
  }), /*#__PURE__*/React.createElement(TwitterIcon, {
    width: "15",
    height: "15"
  }));
};
export var LinkedinButtonIcon = function LinkedinButtonIcon(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    modifier: "social_linkedin",
    fit: "icon"
  }), /*#__PURE__*/React.createElement(LinkedinIcon, {
    width: "12",
    height: "12"
  }));
};
export var InstagramButtonIcon = function InstagramButtonIcon(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    modifier: "social_instagram",
    fit: "icon"
  }), /*#__PURE__*/React.createElement(InstagramIcon, {
    width: "16",
    height: "16"
  }));
};
export var YoutubeButtonIcon = function YoutubeButtonIcon(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    modifier: "social_youtube",
    fit: "icon"
  }), /*#__PURE__*/React.createElement(YoutubeIcon, {
    width: "16",
    height: "16"
  }));
};