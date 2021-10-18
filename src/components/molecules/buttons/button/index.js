"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.buttonVariants = exports.buttonSizes = exports.buttonMobileFitOptions = exports.buttonFitOptions = exports.buttonModifiers = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _modifierStyles = require("./helpers/modifier-styles");

var _screenConfig = require("../../../../constants/screen-config");

var _classnames = _interopRequireDefault(require("classnames"));

var buttonModifiers = ['hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen', 'copper', 'boron', 'calcium', 'neon', 'iron', 'social_facebook', 'social_twitter', 'social_linkedin', 'social_instagram', 'social_youtube', 'social_pinterest'];
exports.buttonModifiers = buttonModifiers;
var buttonFitOptions = ['icon', 'min-width', 'content', 'fluid'];
exports.buttonFitOptions = buttonFitOptions;
var buttonMobileFitOptions = [null].concat(buttonFitOptions);
exports.buttonMobileFitOptions = buttonMobileFitOptions;
var buttonSizes = ['nano', 'micro', 'tiny', 'big', 'huge', 'giant', 'regular'];
exports.buttonSizes = buttonSizes;
var buttonVariants = ['andromeda', 'orion'];
exports.buttonVariants = buttonVariants;

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "no9p2t-0"
})(["position:relative;box-sizing:border-box;min-height:var(--Button-dimension);padding:var(--Button-padding);display:inline-flex;justify-content:center;align-items:center;gap:", ";", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appearance:none;cursor:pointer;border-radius:var(--Button-border-radius,0);min-width:0;&:disabled,&.k-Button--disabled{cursor:not-allowed;}&:hover{text-decoration:none;}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&.k-Button--nano{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:0 ", ";font-size:", ";}&.k-Button--micro{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";font-size:", ";}&.k-Button--tiny{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";}&.k-Button--regular{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";}&.k-Button--big{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--huge{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--giant{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--fit-min-width{min-width:var(--Button-min-width);}&.k-Button--fit-icon{padding:0;overflow:hidden;width:var(--Button-dimension);height:var(--Button-dimension);}&.k-Button--fit-fluid{width:100%;}@media (max-width:", "){&[class*='k-Button--mobile-fit']{min-width:initial !important;padding:var(--Button-padding);width:initial;height:initial;width:initial;&.k-Button--mobile-fit-min-width{min-width:var(--Button-min-width) !important;}&.k-Button--mobile-fit-icon{padding:0;overflow:hidden;width:var(--Button-dimension);height:var(--Button-dimension);}&.k-Button--mobile-fit-fluid{width:100%;}}}&.k-Button--orion:not(.k-Button--rounded){&.k-Button--nano,&.k-Button--micro,&.k-Button--tiny{--Button-border-radius:", ";}&.k-Button--regular,&.k-Button--big,&.k-Button--huge,&.k-Button--giant{--Button-border-radius:", ";@media (min-width:", "){--Button-border-radius:", ";}}}&.k-Button--rounded{--Button-border-radius:50%;}", ""], (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(6), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(130), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(8), function (_ref) {
  var modifier = _ref.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
}); // const ForwardedButtonComponent = forwardRef((props, ref) => {
//   return <button ref={ref} {...props}/>
// })


var Button = function Button(_ref2) {
  var _classNames;

  var children = _ref2.children,
      modifier = _ref2.modifier,
      variant = _ref2.variant,
      size = _ref2.size,
      className = _ref2.className,
      rounded = _ref2.rounded,
      fluid = _ref2.fluid,
      icon = _ref2.icon,
      borderRadius = _ref2.borderRadius,
      disabled = _ref2.disabled,
      tag = _ref2.tag,
      as = _ref2.as,
      fit = _ref2.fit,
      mobileFit = _ref2.mobileFit,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children", "modifier", "variant", "size", "className", "rounded", "fluid", "icon", "borderRadius", "disabled", "tag", "as", "fit", "mobileFit"]);

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

  var internalTag = as || tag;

  var fitClass = function () {
    switch (true) {
      case fluid && !icon:
        return 'fluid';

      case icon && !fluid:
        return 'icon';

      default:
        return fit;
    }
  }();

  return /*#__PURE__*/_react.default.createElement(StyledButton, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Button', className, "k-Button--".concat(actualSize), "k-Button--".concat(modifier), "k-Button--".concat(variant), "k-Button--fit-".concat(fitClass), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "k-Button--mobile-fit-".concat(mobileFit), !!mobileFit), (0, _defineProperty2.default)(_classNames, 'k-Button--disabled', disabled), (0, _defineProperty2.default)(_classNames, 'k-Button--rounded', rounded), _classNames)),
    modifier: modifier,
    style: {
      '--Button-border-radius': borderRadius > 0 ? (0, _typography.pxToRem)(borderRadius) : null
    },
    type: "button",
    as: internalTag,
    disabled: internalTag === 'button' ? disabled : null
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
  size: _propTypes.default.oneOf(buttonSizes),
  fit: _propTypes.default.oneOf(buttonFitOptions),
  mobileFit: _propTypes.default.oneOf(buttonMobileFitOptions),
  modifier: _propTypes.default.oneOf(buttonModifiers),
  variant: _propTypes.default.oneOf(buttonVariants)
};
Button.defaultProps = {
  tag: 'button',
  fluid: false,
  icon: false,
  rounded: false,
  borderRadius: 0,
  size: 'regular',
  modifier: 'hydrogen',
  variant: 'orion',
  fit: 'min-width',
  mobileFit: null
};