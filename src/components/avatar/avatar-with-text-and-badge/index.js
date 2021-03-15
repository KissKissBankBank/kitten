"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarWithTextAndBadge = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _badge = require("../../../components/atoms/badge");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _reactElements = require("../../../helpers/react/react-elements");

var StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "avatar-with-text-and-badge__StyledWrapper",
  componentId: "hgnaim-0"
})(["display:flex;align-items:center;padding:0;border:none;background:none;text-decoration:none;.k-Avatar{margin-right:", ";position:relative;padding:0;}.k-Avatar__imageWrapper{width:", ";height:", ";border-radius:50%;box-sizing:border-box;display:flex;overflow:hidden;border:0;padding:0;color:", ";background-color:", ";color:var(--k-Avatar-color);background-color:var(--k-Avatar-background-color);}.k-Avatar__image{display:block;margin:0;padding:0;border:0;width:100%;height:100%;}.k-Avatar__noImage{display:flex;width:100%;height:100%;align-items:center;justify-content:center;", " font-size:", ";line-height:1;}.k-Avatar__badge{position:absolute;top:", ";right:", ";border:", " solid white;}.k-Avatar__text{padding:pxToRem(10);padding-right:0;margin:0;text-align:left;color:", ";text-decoration:none;", " font-size:", ";line-height:1.2;}.k-Avatar__text--hasEllipsis{max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}.k-Avatar--big{margin-right:", ";.k-Avatar__imageWrapper{width:", ";height:", ";}.k-Avatar__noImage{font-size:", ";}& + .k-Avatar__text{font-size:", ";}}.k-Avatar--customSize{width:var(--Avatar-width);height:var(--Avatar-height);}a&,button&,&.k-Avatar__wrapper--isHoverable{cursor:pointer;.k-Avatar{opacity:1;transition:opacity .2s;}&:hover .k-Avatar,&:focus .k-Avatar{opacity:.8;}}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), _colorsConfig.default.background1, _colorsConfig.default.primary3, _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(-4), (0, _typography.pxToRem)(-8), (0, _typography.pxToRem)(2), _colorsConfig.default.font1, _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(60), (0, _typography.stepToRem)(-1), (0, _typography.stepToRem)(0));

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
  var badgeElement = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: AvatarWithTextAndBadge.Badge
  });
  var badge = badgeElement && badgeElement[0];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-Avatar', className, "k-Avatar--".concat(size), {
      'k-Avatar--customSize': width && height
    }),
    style: (0, _extends2.default)({}, style, {
      '--k-Avatar-color': textColor,
      '--k-Avatar-background-color': backgroundColor,
      '--Avatar-width': width,
      '--Avatar-height': height
    })
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Avatar__imageWrapper"
  }, src ? /*#__PURE__*/_react.default.createElement("img", {
    className: "k-Avatar__image",
    src: src,
    alt: alt
  }) : /*#__PURE__*/_react.default.createElement("span", {
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
  size: _propTypes.default.oneOf(['regular', 'big'])
};
Image.defaultProps = {
  src: null,
  textColor: _colorsConfig.default.background1,
  backgroundColor: _colorsConfig.default.primary3,
  alt: null,
  size: 'regular'
};

var Badge = function Badge(_ref2) {
  var backgroundColor = _ref2.backgroundColor,
      className = _ref2.className,
      a11yText = _ref2.a11yText,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["backgroundColor", "className", "a11yText"]);
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

var Text = function Text(_ref3) {
  var textClassName = _ref3.textClassName,
      className = _ref3.className,
      withEllipsisOverflow = _ref3.withEllipsisOverflow,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["textClassName", "className", "withEllipsisOverflow"]);
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Avatar__text', textClassName, className, {
      'k-Avatar__text--hasEllipsis': withEllipsisOverflow
    })
  }, props));
};

Text.propTypes = {
  withEllipsisOverflow: _propTypes.default.bool,
  textClassName: (0, _deprecated.default)(_propTypes.default.string, 'Please use standard `className` prop.')
};
Text.defaultProps = {
  withEllipsisOverflow: false
};

var AvatarWithTextAndBadge = function AvatarWithTextAndBadge(_ref4) {
  var className = _ref4.className,
      hoverable = _ref4.hoverable,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["className", "hoverable"]);
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