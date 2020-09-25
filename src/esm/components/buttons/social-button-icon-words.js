import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { Button } from '../../components/buttons/button';
import { FacebookIcon } from '../../components/icons/facebook-icon';
import { TwitterIcon } from '../../components/icons/twitter-icon';
import { LinkedinIcon } from '../../components/icons/linkedin-icon';
export var FacebookButtonIconWords = function FacebookButtonIconWords(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    icon: true,
    size: "big",
    modifier: "facebook"
  }, props), /*#__PURE__*/React.createElement(FacebookIcon, {
    className: "k-Button__icon"
  }), children);
};
export var TwitterButtonIconWords = function TwitterButtonIconWords(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    icon: true,
    size: "big",
    modifier: "twitter"
  }, props), /*#__PURE__*/React.createElement(TwitterIcon, {
    className: "k-Button__icon"
  }), children);
};
export var LinkedinButtonIconWords = function LinkedinButtonIconWords(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["children"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    icon: true,
    size: "big",
    modifier: "linkedin"
  }, props), /*#__PURE__*/React.createElement(LinkedinIcon, {
    className: "k-Button__icon"
  }), children);
};