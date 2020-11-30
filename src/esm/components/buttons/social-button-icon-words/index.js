import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { Button } from '../../../components/buttons/button/button';
import { FacebookIcon } from '../../../components/icons/facebook-icon';
import { TwitterIcon } from '../../../components/icons/twitter-icon';
import { LinkedinIcon } from '../../../components/icons/linkedin-icon';
import { InstagramIcon } from '../../../components/icons/instagram-icon';
export var FacebookButtonIconWords = function FacebookButtonIconWords(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    big: true
  }, props, {
    modifier: "social_facebook"
  }), /*#__PURE__*/React.createElement(FacebookIcon, {
    height: "14",
    width: "7"
  }), /*#__PURE__*/React.createElement("span", null, children));
};
export var TwitterButtonIconWords = function TwitterButtonIconWords(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    big: true
  }, props, {
    modifier: "social_twitter"
  }), /*#__PURE__*/React.createElement(TwitterIcon, {
    height: "12",
    width: "15"
  }), /*#__PURE__*/React.createElement("span", null, children));
};
export var InstagramButtonIconWords = function InstagramButtonIconWords(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["children"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    big: true
  }, props, {
    modifier: "social_instagram"
  }), /*#__PURE__*/React.createElement(InstagramIcon, {
    height: "16",
    width: "16"
  }), /*#__PURE__*/React.createElement("span", null, children));
};
export var LinkedinButtonIconWords = function LinkedinButtonIconWords(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["children"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    big: true
  }, props, {
    modifier: "social_linkedin"
  }), /*#__PURE__*/React.createElement(LinkedinIcon, {
    height: "12",
    width: "12"
  }), /*#__PURE__*/React.createElement("span", null, children));
};