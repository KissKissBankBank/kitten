import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { LinkBox } from './../link-box';
import { LinkBoxIllustration } from '../../../graphics/illustrations/link-box-illustration';
import { Text } from '../../../typography/text';
export const DocLinkBox = _ref => {
  let {
    isExternal,
    href,
    title,
    text,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(LinkBox, _extends({
    href: href,
    isExternal: isExternal
  }, props), /*#__PURE__*/React.createElement(LinkBox.Icon, null, /*#__PURE__*/React.createElement(LinkBoxIllustration, {
    className: "k-LinkBox__icon--svg"
  })), /*#__PURE__*/React.createElement(LinkBox.Text, null, /*#__PURE__*/React.createElement(Text, {
    tag: "span",
    weight: "500",
    size: "small",
    lineHeight: "normal"
  }, title), /*#__PURE__*/React.createElement(Text, {
    tag: "span",
    weight: "400",
    size: "micro",
    lineHeight: "normal"
  }, text)));
};