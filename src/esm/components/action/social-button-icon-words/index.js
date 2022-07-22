import React from 'react';
import { Button } from '../../action/button';
import { FacebookIcon } from '../../graphics/icons/facebook-icon';
import { TwitterIcon } from '../../graphics/icons/twitter-icon';
import { LinkedinIcon } from '../../graphics/icons/linkedin-icon';
import { InstagramIcon } from '../../graphics/icons/instagram-icon';
export const FacebookButtonIconWords = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(FacebookIcon, {
    height: "14",
    width: "7"
  }), /*#__PURE__*/React.createElement("span", null, children));
};
export const TwitterButtonIconWords = _ref2 => {
  let {
    children,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(TwitterIcon, {
    height: "12",
    width: "15"
  }), /*#__PURE__*/React.createElement("span", null, children));
};
export const InstagramButtonIconWords = _ref3 => {
  let {
    children,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(InstagramIcon, {
    height: "16",
    width: "16"
  }), /*#__PURE__*/React.createElement("span", null, children));
};
export const LinkedinButtonIconWords = _ref4 => {
  let {
    children,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(LinkedinIcon, {
    height: "12",
    width: "12"
  }), /*#__PURE__*/React.createElement("span", null, children));
};
const defaultProps = {
  modifier: 'beryllium'
};
FacebookButtonIconWords.defaultProps = defaultProps;
TwitterButtonIconWords.defaultProps = defaultProps;
LinkedinButtonIconWords.defaultProps = defaultProps;
InstagramButtonIconWords.defaultProps = defaultProps;