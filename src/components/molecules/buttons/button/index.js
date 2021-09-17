"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Button = exports.ICON_GIANT = exports.ICON_HUGE = exports.ICON_BIG = exports.ICON_TINY = exports.ICON_MICRO = exports.ICON_NANO = exports.ICON = exports.GIANT = exports.HUGE = exports.BIG = exports.TINY = exports.MICRO = exports.NANO = exports.DEFAULT = exports.ROUNDED = exports.FLUID = void 0;

require("core-js/modules/es.string.big.js");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _modifierStyles = require("./helpers/modifier-styles");

var _screenConfig = require("../../../../constants/screen-config");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["children", "modifier", "variant", "size", "className", "rounded", "fluid", "icon", "borderRadius", "tag"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-no9p2t-0"
})(["display:inline-flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appearance:none;cursor:pointer;&:disabled{cursor:not-allowed;}&:hover{text-decoration:none;}>:nth-child(n){margin-right:", ";text-align:left;}>:last-child{margin-right:0;}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&.k-Button--hasBorderRadius{border-radius:var(--border-radius);}", " &.k-Button--nano{", "}&.k-Button--micro{", "}&.k-Button--tiny{", "}&.k-Button--big{", "}&.k-Button--huge{", "}&.k-Button--giant{", "}&.k-Button--hasIcon:not(.k-Button--fluid){", " &.k-Button--nano{", "}&.k-Button--micro{", "}&.k-Button--tiny{", "}&.k-Button--big{", "}&.k-Button--huge{", "}&.k-Button--giant{", "}}&.k-Button--fluid{", "}&.k-Button--rounded{", "}&.k-Button--orion{border-radius:", ";@media (min-width:", "){border-radius:", ";}}", ""], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, (0, _typography.pxToRem)(10), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, function () {
  return DEFAULT;
}, function () {
  return NANO;
}, function () {
  return MICRO;
}, function () {
  return TINY;
}, function () {
  return BIG;
}, function () {
  return HUGE;
}, function () {
  return GIANT;
}, function () {
  return ICON;
}, function () {
  return ICON_NANO;
}, function () {
  return ICON_MICRO;
}, function () {
  return ICON_TINY;
}, function () {
  return ICON_BIG;
}, function () {
  return ICON_HUGE;
}, function () {
  return ICON_GIANT;
}, function () {
  return FLUID;
}, function () {
  return ROUNDED;
}, (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(8), function (_ref) {
  var modifier = _ref.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
});

var FLUID = (0, _styledComponents.css)(["min-width:initial;width:100%;"]);
exports.FLUID = FLUID;
var ROUNDED = (0, _styledComponents.css)(["border-radius:50%;"]);
exports.ROUNDED = ROUNDED;
var DEFAULT = (0, _styledComponents.css)(["min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(50));
exports.DEFAULT = DEFAULT;
var NANO = (0, _styledComponents.css)(["min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(6), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(20));
exports.NANO = NANO;
var MICRO = (0, _styledComponents.css)(["min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(130), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(20));
exports.MICRO = MICRO;
var TINY = (0, _styledComponents.css)(["min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(40));
exports.TINY = TINY;
var BIG = (0, _styledComponents.css)(["@media (min-width:", "){min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(70));
exports.BIG = BIG;
var HUGE = (0, _styledComponents.css)(["min-height:", ";font-size:", ";padding:", " ", ";@media (min-width:", "px){min-width:", ";min-height:", ";font-size:", ";padding:", " ", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(80), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(80));
exports.HUGE = HUGE;
var GIANT = (0, _styledComponents.css)(["min-height:", ";font-size:", ";padding:", " ", ";@media (min-width:", "px){min-width:", ";min-height:", ";font-size:", ";padding:", " ", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(90), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(90));
exports.GIANT = GIANT;
var ICON = (0, _styledComponents.css)(["min-width:initial;min-height:initial;width:", ";height:", ";padding:0;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";min-width:0;min-height:0;}"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50));
exports.ICON = ICON;
var ICON_NANO = (0, _styledComponents.css)(["width:", ";height:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20));
exports.ICON_NANO = ICON_NANO;
var ICON_MICRO = (0, _styledComponents.css)(["width:", ";height:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30));
exports.ICON_MICRO = ICON_MICRO;
var ICON_TINY = (0, _styledComponents.css)(["width:", ";height:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40));
exports.ICON_TINY = ICON_TINY;
var ICON_BIG = (0, _styledComponents.css)(["@media (min-width:", "){min-width:0;min-height:0;padding:0;width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(70));
exports.ICON_BIG = ICON_BIG;
var ICON_HUGE = (0, _styledComponents.css)(["min-width:initial;width:", ";height:", ";@media (min-width:", "){min-width:initial;width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(80));
exports.ICON_HUGE = ICON_HUGE;
var ICON_GIANT = (0, _styledComponents.css)(["min-width:initial;width:", ";height:", ";@media (min-width:", "){min-width:initial;width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(90)); // const ForwardedButtonComponent = forwardRef((props, ref) => {
//   return <button ref={ref} {...props}/>
// })

exports.ICON_GIANT = ICON_GIANT;

var Button = function Button(_ref2) {
  var children = _ref2.children,
      modifier = _ref2.modifier,
      variant = _ref2.variant,
      size = _ref2.size,
      className = _ref2.className,
      rounded = _ref2.rounded,
      fluid = _ref2.fluid,
      icon = _ref2.icon,
      borderRadius = _ref2.borderRadius,
      tag = _ref2.tag,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded);

  var actualSize = function () {
    switch (true) {
      case !!size:
        return size;

      case props.nano:
        return 'nano';

      case props.micro:
        return 'micro';

      case props.tiny:
        return 'tiny';

      case props.big:
        return 'big';

      case props.huge:
        return 'huge';

      case props.giant:
        return 'giant';

      default:
        return 'regular';
    }
  }();

  return /*#__PURE__*/_react.default.createElement(StyledButton, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Button', className, "k-Button--" + actualSize, "k-Button--" + modifier, "k-Button--" + variant, {
      'k-Button--fluid': fluid,
      'k-Button--hasIcon': icon,
      'k-Button--rounded': rounded,
      'k-Button--hasBorderRadius': borderRadius > 0
    }),
    style: {
      '--border-radius': (0, _typography.pxToRem)(borderRadius)
    },
    modifier: modifier,
    type: "button",
    as: tag
  }, props), children);
};

exports.Button = Button;
Button.propTypes = {
  tag: _propTypes.default.string,
  borderRadius: _propTypes.default.number,
  nano: (0, _deprecated.default)(_propTypes.default.bool, 'Use `size` prop instead.'),
  micro: (0, _deprecated.default)(_propTypes.default.bool, 'Use `size` prop instead.'),
  tiny: (0, _deprecated.default)(_propTypes.default.bool, 'Use `size` prop instead.'),
  big: (0, _deprecated.default)(_propTypes.default.bool, 'Use `size` prop instead.'),
  huge: (0, _deprecated.default)(_propTypes.default.bool, 'Use `size` prop instead.'),
  giant: (0, _deprecated.default)(_propTypes.default.bool, 'Use `size` prop instead.'),
  fluid: _propTypes.default.bool,
  icon: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['nano', 'micro', 'tiny', 'big', 'huge', 'giant', 'regular']),
  modifier: _propTypes.default.oneOf(['hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen', 'copper', 'boron', 'neon', 'iron', 'social_facebook', 'social_twitter', 'social_linkedin', 'social_instagram', 'social_youtube', 'social_pinterest']),
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};
Button.defaultProps = {
  tag: 'button',
  fluid: false,
  icon: false,
  rounded: false,
  borderRadius: 0,
  size: 'regular',
  modifier: 'hydrogen',
  variant: 'andromeda'
};