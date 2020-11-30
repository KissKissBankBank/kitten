import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import LinkBox from './../link-box';
import { LinkBoxIllustration } from './../../../components/illustrations/link-box-illustration';
import { Text } from './../../../components/typography/text';
export var DocLinkBox = function DocLinkBox(_ref) {
  var isExternal = _ref.isExternal,
      href = _ref.href,
      title = _ref.title,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["isExternal", "href", "title", "text"]);

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