import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Text as KittenText } from '../../../components/typography/text';
import { VisuallyHidden } from '../../../components/accessibility/visually-hidden';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { getReactElementsByType } from '../../../helpers/react/react-elements';
var WithoutAvatar = styled.div.withConfig({
  displayName: "avatar-with-text-and-badge__WithoutAvatar",
  componentId: "hgnaim-0"
})(["display:flex;align-items:center;justify-content:center;color:", ";background-color:", ";width:", ";height:", ";"], function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor;
}, function (_ref3) {
  var width = _ref3.width;
  return width;
}, function (_ref4) {
  var height = _ref4.height;
  return height;
});

var Image = function Image(_ref5) {
  var src = _ref5.src,
      height = _ref5.height,
      width = _ref5.width,
      textColor = _ref5.textColor,
      backgroundColor = _ref5.backgroundColor,
      alt = _ref5.alt,
      children = _ref5.children,
      text = _ref5.text;
  var badgeElement = getReactElementsByType({
    children: children,
    type: AvatarWithTextAndBadge.Badge
  });
  var badge = badgeElement && badgeElement[0];
  return /*#__PURE__*/React.createElement("span", {
    className: "k-ButtonWithBadge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-ButtonImage"
  }, src ? /*#__PURE__*/React.createElement("img", {
    className: "k-ButtonImage__img",
    src: src,
    width: width,
    height: height,
    alt: alt
  }) : /*#__PURE__*/React.createElement(WithoutAvatar, {
    color: textColor,
    backgroundColor: backgroundColor,
    width: width,
    height: height
  }, /*#__PURE__*/React.createElement(KittenText, {
    size: "micro",
    weight: "regular"
  }, text))), badge);
};

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  alt: PropTypes.string
};
Image.defaultProps = {
  src: null,
  height: pxToRem(40),
  width: pxToRem(40),
  textColor: COLORS.background1,
  backgroundColor: COLORS.primary3,
  alt: null
};

var Badge = function Badge(_ref6) {
  var backgroundColor = _ref6.backgroundColor,
      children = _ref6.children,
      a11yText = _ref6.a11yText;
  return /*#__PURE__*/React.createElement("span", {
    className: "k-ButtonWithBadge__badge k-Badge",
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, children), a11yText && /*#__PURE__*/React.createElement(VisuallyHidden, null, a11yText));
};

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  a11yText: PropTypes.string
};
Badge.defaultProps = {
  backgroundColor: COLORS.primary1,
  a11yText: 'Notification(s)'
};

var Text = function Text(_ref7) {
  var textClassName = _ref7.textClassName,
      withEllipsisOverflow = _ref7.withEllipsisOverflow,
      children = _ref7.children,
      props = _objectWithoutProperties(_ref7, ["textClassName", "withEllipsisOverflow", "children"]);

  var textClassNames = classNames(textClassName, 'k-ButtonImageWithText__text', 'k-ButtonImageWithText__text--withoutPaddingRight', 'always-visible', {
    'text--withEllipsis': withEllipsisOverflow
  });
  return /*#__PURE__*/React.createElement("span", {
    className: textClassNames
  }, children);
};

Text.propTypes = {
  withEllipsisOverflow: PropTypes.bool
};
Text.defaultProps = {
  withEllipsisOverflow: false
};
export var AvatarWithTextAndBadge = function AvatarWithTextAndBadge(_ref8) {
  var children = _ref8.children,
      className = _ref8.className,
      props = _objectWithoutProperties(_ref8, ["children", "className"]);

  var componentClassNames = classNames(className, 'k-ButtonImageWithText', 'k-u-avoid-click');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: componentClassNames
  }, props), children);
};
AvatarWithTextAndBadge.Image = Image;
AvatarWithTextAndBadge.Badge = Badge;
AvatarWithTextAndBadge.Text = Text;