import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children"],
    _excluded2 = ["children"],
    _excluded3 = ["children"],
    _excluded4 = ["children"];
import React from 'react';
import { Button } from '../../../../components/molecules/buttons/button';
import { FacebookIcon } from '../../../../components/graphics/icons/facebook-icon';
import { TwitterIcon } from '../../../../components/graphics/icons/twitter-icon';
import { LinkedinIcon } from '../../../../components/graphics/icons/linkedin-icon';
import { InstagramIcon } from '../../../../components/graphics/icons/instagram-icon';
export var FacebookButtonIconWords = function FacebookButtonIconWords(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(FacebookIcon, {
    height: "14",
    width: "7"
  }), /*#__PURE__*/React.createElement("span", null, children));
};
export var TwitterButtonIconWords = function TwitterButtonIconWords(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(TwitterIcon, {
    height: "12",
    width: "15"
  }), /*#__PURE__*/React.createElement("span", null, children));
};
export var InstagramButtonIconWords = function InstagramButtonIconWords(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(InstagramIcon, {
    height: "16",
    width: "16"
  }), /*#__PURE__*/React.createElement("span", null, children));
};
export var LinkedinButtonIconWords = function LinkedinButtonIconWords(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement(Button, props, /*#__PURE__*/React.createElement(LinkedinIcon, {
    height: "12",
    width: "12"
  }), /*#__PURE__*/React.createElement("span", null, children));
};
var defaultProps = {
  modifier: 'beryllium'
};
FacebookButtonIconWords.defaultProps = defaultProps;
TwitterButtonIconWords.defaultProps = defaultProps;
LinkedinButtonIconWords.defaultProps = defaultProps;
InstagramButtonIconWords.defaultProps = defaultProps;