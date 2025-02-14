"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AvatarWithTextAndBadge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _badge = require("../../information/badge");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _getReactElements = require("../../../helpers/react/get-react-elements");

const StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "avatar-with-text-and-badge__StyledWrapper",
  componentId: "sc-1npfhe1-0"
})(["display:flex;align-items:center;padding:0;border:none;background:none;text-decoration:none;gap:", ";.k-Avatar{position:relative;padding:0;}.k-Avatar__imageWrapper{width:", ";height:", ";border-radius:var(--border-radius-rounded);box-sizing:border-box;display:flex;overflow:hidden;border:var(--border-width) solid var(--color-grey-300);padding:0;color:var(--k-Avatar-color);background-color:var(--k-Avatar-background-color);}.k-Avatar__image{display:block;margin:0;padding:0;border:0;width:100%;height:100%;}.k-Avatar__noImage{display:flex;width:100%;height:100%;align-items:center;justify-content:center;", " font-size:", ";line-height:1;}.k-Avatar__badge{position:absolute;top:", ";right:", ";border:var(--border-width) solid white;}.k-Avatar__text{padding:pxToRem(10);padding-right:0;text-align:left;color:", ";text-decoration:none;", " font-size:", ";line-height:1.2;}.k-Avatar__text--hasEllipsis{&,& *{max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}}.k-Avatar--small{.k-Avatar__imageWrapper{width:", ";height:", ";}.k-Avatar__noImage{font-size:", ";}& + .k-Avatar__text{font-size:", ";}}.k-Avatar--large{margin-right:", ";.k-Avatar__imageWrapper{width:", ";height:", ";}.k-Avatar__noImage{font-size:", ";}& + .k-Avatar__text{font-size:", ";}}.k-Avatar--customSize{width:var(--Avatar-width);height:var(--Avatar-height);}a&,button&,&.k-Avatar__wrapper--isHoverable{cursor:pointer;.k-Avatar{opacity:1;transition:opacity 0.2s;}&:hover .k-Avatar,&:focus .k-Avatar{opacity:0.8;border:var(--border-hover);}}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), _typographyConfig.default.fontStyles['500'], (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(-4), (0, _typography.pxToRem)(-8), _colorsConfig.default.font1, _typographyConfig.default.fontStyles['500'], (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-2), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(60), (0, _typography.stepToRem)(-1), (0, _typography.stepToRem)(0));

const Image = _ref => {
  let {
    alt,
    backgroundColor,
    children,
    className,
    height,
    size,
    src,
    style,
    text,
    textColor,
    width,
    ...props
  } = _ref;
  const badgeElement = (0, _getReactElements.getReactElementsByType)({
    children,
    type: AvatarWithTextAndBadge.Badge
  });
  const badge = badgeElement && badgeElement[0];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-Avatar', className, "k-Avatar--" + size, {
      'k-Avatar--customSize': width && height
    }),
    style: { ...style,
      '--k-Avatar-color': textColor,
      '--k-Avatar-background-color': backgroundColor,
      '--Avatar-width': width,
      '--Avatar-height': height
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Avatar__imageWrapper"
  }, src ? /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    className: "k-Avatar__image",
    src: src,
    alt: alt
  }, props)) : /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Avatar__noImage"
  }, text)), badge);
};

Image.propTypes = {
  src: _propTypes.default.string,
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  textColor: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  alt: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small', 'medium', 'large'])
};
Image.defaultProps = {
  src: null,
  textColor: _colorsConfig.default.background1,
  backgroundColor: _colorsConfig.default.primary3,
  alt: '',
  size: 'medium'
};

const Badge = _ref2 => {
  let {
    backgroundColor,
    className,
    a11yText,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_badge.Badge, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Avatar__badge', className),
    color: backgroundColor,
    a11yText: a11yText
  }, props));
};

Badge.propTypes = {
  backgroundColor: _propTypes.default.string,
  a11yText: _propTypes.default.string
};
Badge.defaultProps = {
  backgroundColor: _colorsConfig.default.primary1,
  a11yText: 'Notification(s)'
};

const Text = _ref3 => {
  let {
    className,
    withEllipsisOverflow,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Avatar__text', className, {
      'k-Avatar__text--hasEllipsis': withEllipsisOverflow
    })
  }, props));
};

Text.propTypes = {
  withEllipsisOverflow: _propTypes.default.bool
};
Text.defaultProps = {
  withEllipsisOverflow: false
};

const AvatarWithTextAndBadge = _ref4 => {
  let {
    className,
    hoverable,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(StyledWrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Avatar__wrapper', className, {
      'k-Avatar__wrapper--isHoverable': hoverable
    })
  }, props));
};

exports.AvatarWithTextAndBadge = AvatarWithTextAndBadge;
AvatarWithTextAndBadge.propTypes = {
  hoverable: _propTypes.default.bool
};
AvatarWithTextAndBadge.defaultProps = {
  hoverable: false
};
AvatarWithTextAndBadge.Image = Image;
AvatarWithTextAndBadge.Badge = Badge;
AvatarWithTextAndBadge.Text = Text;