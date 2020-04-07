"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _config = require("../config");

var _screenConfig = require("../../../../constants/screen-config");

var _mediaQueries = require("../../../../helpers/utils/media-queries");

var _visuallyHidden = require("../../../../components/accessibility/visually-hidden");

var horizontalPadding = (0, _styledComponents.css)(["padding-left:", ";padding-right:", ";@media (min-width:", "px){padding-left:", ";padding-right:", ";}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40));

var StyledLink = _styledComponents.default.a.withConfig({
  displayName: "button__StyledLink",
  componentId: "k3u2iw-0"
})(["", " box-sizing:border-box;display:flex;align-items:center;justify-content:center;height:100%;font-size:", ";color:", ";background-color:", ";text-decoration:none;", " &:hover,&:focus{background-color:", ";}"], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor;
}, function (_ref3) {
  var textShownFromMediaQuery = _ref3.textShownFromMediaQuery,
      icon = _ref3.icon,
      text = _ref3.text;

  if (icon && !text) {
    return (0, _styledComponents.css)(["width:", ";height:", ";@media (min-width:", "px){width:", ";height:", ";}@media (min-width:", "px){width:", ";height:", ";}"], (0, _typography.pxToRem)(_config.MOBILE_HEADER_HEIGHT), (0, _typography.pxToRem)(_config.MOBILE_HEADER_HEIGHT), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(_config.TABLET_HEADER_HEIGHT), (0, _typography.pxToRem)(_config.TABLET_HEADER_HEIGHT), _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(_config.DESKTOP_HEADER_HEIGHT), (0, _typography.pxToRem)(_config.DESKTOP_HEADER_HEIGHT));
  }

  if (!textShownFromMediaQuery) return (0, _styledComponents.css)(["width:inherit;", " @media (min-width:", "px){min-width:", ";}"], horizontalPadding, _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(200));
  var defaultWidthForLowerScreenSize = textShownFromMediaQuery.min && (0, _styledComponents.css)(["@media (", "){", " width:inherit;}@media (min-width:", "px){min-width:", ";}"], textShownFromMediaQuery.min, horizontalPadding, _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(200));
  var defaultWidthForUpperScreenSize = textShownFromMediaQuery.max && (0, _styledComponents.css)(["@media (", "){", " width:inherit;}@media (min-width:", "px){min-width:", ";}"], textShownFromMediaQuery.max, horizontalPadding, _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(200));
  return (0, _styledComponents.css)(["padding:0;width:", ";@media (min-width:", "px){width:", ";}@media (min-width:", "px){width:", ";}", " ", ""], (0, _typography.pxToRem)(_config.MOBILE_HEADER_HEIGHT), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(_config.TABLET_HEADER_HEIGHT), _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(_config.DESKTOP_HEADER_HEIGHT), defaultWidthForLowerScreenSize, defaultWidthForUpperScreenSize);
}, function (_ref4) {
  var backgroundColorHover = _ref4.backgroundColorHover;
  return backgroundColorHover;
});

var Button = function Button(_ref5) {
  var a11yText = _ref5.a11yText,
      icon = _ref5.icon,
      backgroundColor = _ref5.backgroundColor,
      backgroundColorHover = _ref5.backgroundColorHover,
      color = _ref5.color,
      text = _ref5.text,
      href = _ref5.href,
      type = _ref5.type,
      _ref5$hiddenText = _ref5.hiddenText;
  _ref5$hiddenText = _ref5$hiddenText === void 0 ? {} : _ref5$hiddenText;
  var min = _ref5$hiddenText.min,
      max = _ref5$hiddenText.max,
      as = _ref5.as,
      others = (0, _objectWithoutProperties2.default)(_ref5, ["a11yText", "icon", "backgroundColor", "backgroundColorHover", "color", "text", "href", "type", "hiddenText", "as"]);
  var previousScreenSize = min && (0, _mediaQueries.getScreenSizeFrom)('previous')(min);
  var nextScreenSize = max && (0, _mediaQueries.getScreenSizeFrom)('next')(max);
  var hiddenMin = min ? "k-u-hidden@".concat(min, "-up--important") : '';
  var hiddenMax = max ? "k-u-hidden@".concat(max, "-down--important") : '';
  var singleRightMargin = 'k-u-margin-right-single';
  var marginLeftMin = min ? "".concat(singleRightMargin, "@").concat(previousScreenSize.toLowerCase(), "-down--important") : '';
  var marginLeftMax = max ? "".concat(singleRightMargin, "@").concat(nextScreenSize.toLowerCase(), "-up--important") : '';
  var textClassName = "".concat(hiddenMin, " ").concat(hiddenMax).trim();
  var iconClassName = "".concat(marginLeftMin, " ").concat(marginLeftMax).trim();
  var mediaQuery = (min || max) && {
    min: min && "max-width: ".concat(_screenConfig.ScreenConfig[previousScreenSize].max, "px"),
    max: max && "min-width: ".concat(_screenConfig.ScreenConfig[nextScreenSize].min, "px")
  };
  var buttonProps = as ? {
    as: as
  } : type === 'button' ? {
    as: 'button',
    type: type
  } : {
    href: href
  };
  return /*#__PURE__*/_react.default.createElement(StyledLink, (0, _extends2.default)({}, others, buttonProps, {
    backgroundColor: backgroundColor,
    backgroundColorHover: backgroundColorHover,
    color: color,
    textShownFromMediaQuery: mediaQuery,
    icon: icon,
    text: text
  }), icon && _react.default.cloneElement(icon, {
    className: iconClassName,
    'aria-hidden': true
  }), text && textClassName ? /*#__PURE__*/_react.default.createElement("span", {
    className: textClassName
  }, text) : text, a11yText && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, a11yText));
};

exports.Button = Button;
Button.propTypes = {
  icon: _propTypes.default.node,
  backgroundColor: _propTypes.default.string,
  backgroundColorHover: _propTypes.default.string,
  color: _propTypes.default.string,
  text: _propTypes.default.node,
  href: _propTypes.default.string,
  a11yText: _propTypes.default.string,
  type: _propTypes.default.oneOf(['button']),
  hiddenText: _propTypes.default.shape({
    min: _propTypes.default.string,
    max: _propTypes.default.string
  })
};
Button.defaultProps = {
  icon: null,
  backgroundColor: _colorsConfig.default.line1,
  backgroundColorHover: _colorsConfig.default.line2,
  color: _colorsConfig.default.font1,
  text: null
};