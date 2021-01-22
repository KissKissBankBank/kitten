import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { MOBILE_HEADER_HEIGHT, TABLET_HEADER_HEIGHT, DESKTOP_HEADER_HEIGHT } from '../config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { getScreenSizeFrom } from '../../../../helpers/utils/media-queries';
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden';
var horizontalPadding = css(["padding-left:", ";padding-right:", ";@media (min-width:", "px){padding-left:", ";padding-right:", ";}"], pxToRem(30), pxToRem(30), ScreenConfig.S.min, pxToRem(40), pxToRem(40));
var StyledLink = styled.a.withConfig({
  displayName: "button__StyledLink",
  componentId: "k3u2iw-0"
})(["", " box-sizing:border-box;display:flex;align-items:center;justify-content:center;height:100%;font-size:", ";color:", ";background-color:", ";text-decoration:none;&:focus{outline:", " solid ", ";outline-offset:", ";}", " &:hover,&:focus{color:", ";background-color:", ";}"], TYPOGRAPHY.fontStyles.regular, stepToRem(-1), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor;
}, COLORS.primary4, pxToRem(2), pxToRem(-4), function (_ref3) {
  var textShownFromMediaQuery = _ref3.textShownFromMediaQuery,
      icon = _ref3.icon,
      text = _ref3.text;

  if (icon && !text) {
    return css(["width:", ";height:", ";@media (min-width:", "px){width:", ";height:", ";}@media (min-width:", "px){width:", ";height:", ";}"], pxToRem(MOBILE_HEADER_HEIGHT), pxToRem(MOBILE_HEADER_HEIGHT), ScreenConfig.S.min, pxToRem(TABLET_HEADER_HEIGHT), pxToRem(TABLET_HEADER_HEIGHT), ScreenConfig.L.min, pxToRem(DESKTOP_HEADER_HEIGHT), pxToRem(DESKTOP_HEADER_HEIGHT));
  }

  if (!textShownFromMediaQuery) return css(["width:inherit;", " @media (min-width:", "px){min-width:", ";}"], horizontalPadding, ScreenConfig.L.min, pxToRem(200));
  var defaultWidthForLowerScreenSize = textShownFromMediaQuery.min && css(["@media (", "){", " width:inherit;}@media (min-width:", "px){min-width:", ";}"], textShownFromMediaQuery.min, horizontalPadding, ScreenConfig.L.min, pxToRem(200));
  var defaultWidthForUpperScreenSize = textShownFromMediaQuery.max && css(["@media (", "){", " width:inherit;}@media (min-width:", "px){min-width:", ";}"], textShownFromMediaQuery.max, horizontalPadding, ScreenConfig.L.min, pxToRem(200));
  return css(["padding:0;width:", ";@media (min-width:", "px){width:", ";}@media (min-width:", "px){width:", ";}", " ", ""], pxToRem(MOBILE_HEADER_HEIGHT), ScreenConfig.S.min, pxToRem(TABLET_HEADER_HEIGHT), ScreenConfig.L.min, pxToRem(DESKTOP_HEADER_HEIGHT), defaultWidthForLowerScreenSize, defaultWidthForUpperScreenSize);
}, function (_ref4) {
  var colorHover = _ref4.colorHover,
      color = _ref4.color;
  return colorHover || color;
}, function (_ref5) {
  var backgroundColorHover = _ref5.backgroundColorHover;
  return backgroundColorHover;
});
export var Button = function Button(_ref6) {
  var a11yText = _ref6.a11yText,
      icon = _ref6.icon,
      backgroundColor = _ref6.backgroundColor,
      backgroundColorHover = _ref6.backgroundColorHover,
      color = _ref6.color,
      colorHover = _ref6.colorHover,
      text = _ref6.text,
      href = _ref6.href,
      type = _ref6.type,
      _ref6$hiddenText = _ref6.hiddenText;
  _ref6$hiddenText = _ref6$hiddenText === void 0 ? {} : _ref6$hiddenText;

  var min = _ref6$hiddenText.min,
      max = _ref6$hiddenText.max,
      as = _ref6.as,
      others = _objectWithoutProperties(_ref6, ["a11yText", "icon", "backgroundColor", "backgroundColorHover", "color", "colorHover", "text", "href", "type", "hiddenText", "as"]);

  var previousScreenSize = min && getScreenSizeFrom('previous')(min);
  var nextScreenSize = max && getScreenSizeFrom('next')(max);
  var hiddenMin = min ? "k-u-hidden@".concat(min, "-up--important") : '';
  var hiddenMax = max ? "k-u-hidden@".concat(max, "-down--important") : '';
  var singleRightMargin = 'k-u-margin-right-single';
  var marginLeftMin = min ? "".concat(singleRightMargin, "@").concat(previousScreenSize.toLowerCase(), "-down--important") : '';
  var marginLeftMax = max ? "".concat(singleRightMargin, "@").concat(nextScreenSize.toLowerCase(), "-up--important") : '';
  var textClassName = "".concat(hiddenMin, " ").concat(hiddenMax).trim();
  var iconClassName = "".concat(marginLeftMin, " ").concat(marginLeftMax).trim();
  var mediaQuery = (min || max) && {
    min: min && "max-width: ".concat(ScreenConfig[previousScreenSize].max, "px"),
    max: max && "min-width: ".concat(ScreenConfig[nextScreenSize].min, "px")
  };
  var buttonProps = as ? {
    as: as
  } : type === 'button' ? {
    as: 'button',
    type: type
  } : {
    href: href
  };
  return /*#__PURE__*/React.createElement(StyledLink, _extends({}, others, buttonProps, {
    backgroundColor: backgroundColor,
    backgroundColorHover: backgroundColorHover,
    color: color,
    colorHover: colorHover,
    textShownFromMediaQuery: mediaQuery,
    icon: icon,
    text: text
  }), icon && React.cloneElement(icon, {
    className: iconClassName,
    'aria-hidden': true
  }), text && textClassName ? /*#__PURE__*/React.createElement("span", {
    className: textClassName
  }, text) : text, a11yText && /*#__PURE__*/React.createElement(VisuallyHidden, null, a11yText));
};
Button.propTypes = {
  icon: PropTypes.node,
  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  text: PropTypes.node,
  href: PropTypes.string,
  a11yText: PropTypes.string,
  type: PropTypes.oneOf(['button']),
  hiddenText: PropTypes.shape({
    min: PropTypes.string,
    max: PropTypes.string
  })
};
Button.defaultProps = {
  icon: null,
  backgroundColor: COLORS.line1,
  backgroundColorHover: COLORS.line2,
  color: COLORS.font1,
  colorHover: null,
  text: null
};