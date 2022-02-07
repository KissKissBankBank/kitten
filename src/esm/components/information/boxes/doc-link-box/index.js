import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["isExternal", "href", "title", "text"];
import React from 'react';
import { LinkBox } from './../link-box';
import { LinkBoxIllustration } from '../../../graphics/illustrations/link-box-illustration';
import { Text } from '../../../typography/text';
export var DocLinkBox = function DocLinkBox(_ref) {
  var isExternal = _ref.isExternal,
      href = _ref.href,
      title = _ref.title,
      text = _ref.text,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(LinkBox, _extends({
    href: href,
    isExternal: isExternal
  }, props), /*#__PURE__*/React.createElement(LinkBox.Icon, null, /*#__PURE__*/React.createElement(LinkBoxIllustration, {
    className: "k-LinkBox__icon--svg"
  })), /*#__PURE__*/React.createElement(LinkBox.Text, null, /*#__PURE__*/React.createElement(Text, {
    tag: "span",
    weight: "regular",
    size: "tiny",
    lineHeight: "normal"
  }, title), /*#__PURE__*/React.createElement(Text, {
    tag: "span",
    weight: "light",
    size: "micro",
    lineHeight: "normal"
  }, text)));
};