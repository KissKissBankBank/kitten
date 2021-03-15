import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import { Badge as BadgeComponent } from '../../../components/atoms/badge';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import { getReactElementsByType } from '../../../helpers/react/react-elements';
var StyledWrapper = styled.div.withConfig({
  displayName: "avatar-with-text-and-badge__StyledWrapper",
  componentId: "hgnaim-0"
})(["display:flex;align-items:center;padding:0;border:none;background:none;text-decoration:none;.k-Avatar{margin-right:", ";position:relative;padding:0;}.k-Avatar__imageWrapper{width:", ";height:", ";border-radius:50%;box-sizing:border-box;display:flex;overflow:hidden;border:0;padding:0;color:", ";background-color:", ";color:var(--k-Avatar-color);background-color:var(--k-Avatar-background-color);}.k-Avatar__image{display:block;margin:0;padding:0;border:0;width:100%;height:100%;}.k-Avatar__noImage{display:flex;width:100%;height:100%;align-items:center;justify-content:center;", " font-size:", ";line-height:1;}.k-Avatar__badge{position:absolute;top:", ";right:", ";border:", " solid white;}.k-Avatar__text{padding:pxToRem(10);padding-right:0;margin:0;text-align:left;color:", ";text-decoration:none;", " font-size:", ";line-height:1.2;}.k-Avatar__text--hasEllipsis{max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}.k-Avatar--big{margin-right:", ";.k-Avatar__imageWrapper{width:", ";height:", ";}.k-Avatar__noImage{font-size:", ";}& + .k-Avatar__text{font-size:", ";}}.k-Avatar--customSize{width:var(--Avatar-width);height:var(--Avatar-height);}a&,button&,&.k-Avatar__wrapper--isHoverable{cursor:pointer;.k-Avatar{opacity:1;transition:opacity .2s;}&:hover .k-Avatar,&:focus .k-Avatar{opacity:.8;}}"], pxToRem(10), pxToRem(40), pxToRem(40), COLORS.background1, COLORS.primary3, TYPOGRAPHY.fontStyles.regular, stepToRem(-2), pxToRem(-4), pxToRem(-8), pxToRem(2), COLORS.font1, TYPOGRAPHY.fontStyles.regular, stepToRem(-1), pxToRem(15), pxToRem(60), pxToRem(60), stepToRem(-1), stepToRem(0));

var Image = function Image(_ref) {
  var alt = _ref.alt,
      backgroundColor = _ref.backgroundColor,
      children = _ref.children,
      className = _ref.className,
      height = _ref.height,
      size = _ref.size,
      src = _ref.src,
      style = _ref.style,
      text = _ref.text,
      textColor = _ref.textColor,
      width = _ref.width;
  var badgeElement = getReactElementsByType({
    children: children,
    type: AvatarWithTextAndBadge.Badge
  });
  var badge = badgeElement && badgeElement[0];
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-Avatar', className, "k-Avatar--".concat(size), {
      'k-Avatar--customSize': width && height
    }),
    style: _extends({}, style, {
      '--k-Avatar-color': textColor,
      '--k-Avatar-background-color': backgroundColor,
      '--Avatar-width': width,
      '--Avatar-height': height
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-Avatar__imageWrapper"
  }, src ? /*#__PURE__*/React.createElement("img", {
    className: "k-Avatar__image",
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", {
    className: "k-Avatar__noImage"
  }, text)), badge);
};

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['regular', 'big'])
};
Image.defaultProps = {
  src: null,
  textColor: COLORS.background1,
  backgroundColor: COLORS.primary3,
  alt: null,
  size: 'regular'
};

var Badge = function Badge(_ref2) {
  var backgroundColor = _ref2.backgroundColor,
      className = _ref2.className,
      a11yText = _ref2.a11yText,
      props = _objectWithoutProperties(_ref2, ["backgroundColor", "className", "a11yText"]);

  return /*#__PURE__*/React.createElement(BadgeComponent, _extends({
    className: classNames('k-Avatar__badge', className),
    color: backgroundColor,
    a11yText: a11yText
  }, props));
};

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  a11yText: PropTypes.string
};
Badge.defaultProps = {
  backgroundColor: COLORS.primary1,
  a11yText: 'Notification(s)'
};

var Text = function Text(_ref3) {
  var textClassName = _ref3.textClassName,
      className = _ref3.className,
      withEllipsisOverflow = _ref3.withEllipsisOverflow,
      props = _objectWithoutProperties(_ref3, ["textClassName", "className", "withEllipsisOverflow"]);

  return /*#__PURE__*/React.createElement("span", _extends({
    className: classNames('k-Avatar__text', textClassName, className, {
      'k-Avatar__text--hasEllipsis': withEllipsisOverflow
    })
  }, props));
};

Text.propTypes = {
  withEllipsisOverflow: PropTypes.bool,
  textClassName: deprecated(PropTypes.string, 'Please use standard `className` prop.')
};
Text.defaultProps = {
  withEllipsisOverflow: false
};
export var AvatarWithTextAndBadge = function AvatarWithTextAndBadge(_ref4) {
  var className = _ref4.className,
      hoverable = _ref4.hoverable,
      props = _objectWithoutProperties(_ref4, ["className", "hoverable"]);

  return /*#__PURE__*/React.createElement(StyledWrapper, _extends({
    className: classNames('k-Avatar__wrapper', className, {
      'k-Avatar__wrapper--isHoverable': hoverable
    })
  }, props));
};
AvatarWithTextAndBadge.propTypes = {
  hoverable: PropTypes.bool
};
AvatarWithTextAndBadge.defaultProps = {
  hoverable: false
};
AvatarWithTextAndBadge.Image = Image;
AvatarWithTextAndBadge.Badge = Badge;
AvatarWithTextAndBadge.Text = Text;