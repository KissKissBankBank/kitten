import React from 'react';
import { Button } from '../../action/button';
import { FacebookIcon } from '../../graphics/icons/facebook-icon';
import { TwitterIcon } from '../../graphics/icons/twitter-icon';
import { LinkedinIcon } from '../../graphics/icons/linkedin-icon';
import { InstagramIcon } from '../../graphics/icons/instagram-icon';
import { YoutubeIcon } from '../../graphics/icons/youtube-icon';
export const FacebookButtonIcon = props => /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(FacebookIcon, {
  width: "14",
  height: "14"
}));
export const TwitterButtonIcon = props => /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(TwitterIcon, {
  width: "15",
  height: "15"
}));
export const LinkedinButtonIcon = props => /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(LinkedinIcon, {
  width: "12",
  height: "12"
}));
export const InstagramButtonIcon = props => /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(InstagramIcon, {
  width: "16",
  height: "16"
}));
export const YoutubeButtonIcon = props => /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(YoutubeIcon, {
  width: "16",
  height: "16"
}));
const defaultProps = {
  modifier: 'beryllium',
  fit: 'icon'
};
FacebookButtonIcon.defaultProps = defaultProps;
TwitterButtonIcon.defaultProps = defaultProps;
LinkedinButtonIcon.defaultProps = defaultProps;
InstagramButtonIcon.defaultProps = defaultProps;
YoutubeButtonIcon.defaultProps = defaultProps;