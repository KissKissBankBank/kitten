"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.buttonSizes = exports.buttonModifiers = exports.buttonMobileFitOptions = exports.buttonFitOptions = exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _modifierStyles = require("./helpers/modifier-styles");

var _screenConfig = require("../../../constants/screen-config");

var _classnames = _interopRequireDefault(require("classnames"));

var _deprecated = require("../../../helpers/utils/deprecated");

var _excluded = ["children", "modifier", "size", "className", "rounded", "borderRadius", "disabled", "tag", "as", "fit", "mobileFit", "active", "style", "hasBullet", "bulletColor"];
var deprecatedModifiers = ['carbon', 'oxygen', 'calcium', 'social_facebook', 'social_twitter', 'social_linkedin', 'social_instagram', 'social_youtube'];
var buttonModifiers = ['hydrogen', 'helium', 'lithium', 'beryllium', 'copper', 'boron', 'scandium', 'neon', 'iron', 'krypton'];
exports.buttonModifiers = buttonModifiers;
var buttonFitOptions = ['icon', 'min-width', 'content', 'fluid'];
exports.buttonFitOptions = buttonFitOptions;
var buttonMobileFitOptions = [null].concat(buttonFitOptions);
exports.buttonMobileFitOptions = buttonMobileFitOptions;
var buttonSizes = ['nano', 'micro', 'small', 'medium', 'large', 'huge', 'giant'];
exports.buttonSizes = buttonSizes;

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-dl59vq-0"
})(["--Button-border-radius:var(--border-radius-s);&.k-Button--rounded{--Button-border-radius:var(--border-radius-rounded);}position:relative;box-sizing:border-box;min-height:var(--Button-dimension);padding:var(--Button-padding);display:inline-flex;justify-content:center;align-items:center;gap:", ";", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appearance:none;cursor:pointer;border-radius:var(--Button-border-radius,0);min-width:0;svg{flex:0 0 auto;}&:disabled,&.k-Button--disabled{cursor:not-allowed;}&:hover{text-decoration:none;}&:focus-visible{outline:auto;}&.k-Button--nano{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:0 ", ";font-size:", ";}&.k-Button--micro{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";font-size:", ";}&.k-Button--tiny,&.k-Button--small{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";}&.k-Button--regular,&.k-Button--medium{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";}&.k-Button--big,&.k-Button--large{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--huge{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--giant{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--fit-min-width{min-width:var(--Button-min-width);}&.k-Button--fit-icon{padding:0;overflow:hidden;width:var(--Button-dimension);height:var(--Button-dimension);}&.k-Button--fit-fluid{width:100%;}@media (max-width:", "){&[class*='k-Button--mobile-fit']{min-width:initial !important;padding:var(--Button-padding);width:initial;height:initial;width:initial;&.k-Button--mobile-fit-min-width{min-width:var(--Button-min-width) !important;}&.k-Button--mobile-fit-icon{padding:0;overflow:hidden;width:var(--Button-dimension);height:var(--Button-dimension);}&.k-Button--mobile-fit-fluid{width:100%;}}}", " &.k-Button--hasBullet{--Button-bullet-radius:", ";--Math-Cos45:0.7071;--Button-radius:var(--Button-border-radius,0);--Button-bullet-distance:calc( var(--Button-radius) - (var(--Button-radius) * var(--Math-Cos45)) - var(--Button-bullet-radius) );&::after{content:'';position:absolute;background-color:var(--Button-bullet-color,var(--color-primary-500));width:", ";height:", ";border-radius:", ";border:", " solid var(--color-grey-000);right:var(--Button-bullet-distance);top:var(--Button-bullet-distance);}&.k-Button--fit-icon{overflow:initial;}&.k-Button--rounded{--Button-radius:calc(var(--Button-dimension) / 2);}}"], (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(6), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(130), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), function (_ref) {
  var modifier = _ref.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
}, (0, _typography.pxToRem)(3 + 4), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(3)); // const ForwardedButtonComponent = forwardRef((props, ref) => {
//   return <button ref={ref} {...props}/>
// })


var Button = function Button(_ref2) {
  var _classNames;

  var children = _ref2.children,
      modifier = _ref2.modifier,
      size = _ref2.size,
      className = _ref2.className,
      rounded = _ref2.rounded,
      borderRadius = _ref2.borderRadius,
      disabled = _ref2.disabled,
      tag = _ref2.tag,
      as = _ref2.as,
      fit = _ref2.fit,
      mobileFit = _ref2.mobileFit,
      active = _ref2.active,
      style = _ref2.style,
      hasBullet = _ref2.hasBullet,
      bulletColor = _ref2.bulletColor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded);

  if (deprecatedModifiers.includes(modifier)) {
    console.warn("The modifier " + modifier + " has been deprecated. Please use one for the following: " + buttonModifiers.join(', ') + ".");
  }

  (0, _deprecated.checkDeprecatedSizes)(size);
  var internalModifier = active ? 'lithium' : modifier;
  var internalTag = as || tag;
  return /*#__PURE__*/_react.default.createElement(StyledButton, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Button', className, "k-Button--" + (size || 'regular'), "k-Button--" + (internalModifier || 'hydrogen'), "k-Button--fit-" + (fit || 'min-width'), (_classNames = {}, _classNames["k-Button--mobile-fit-" + mobileFit] = !!mobileFit, _classNames['k-Button--disabled'] = disabled, _classNames['k-Button--rounded'] = rounded, _classNames['k-Button--hasBullet'] = hasBullet, _classNames)),
    modifier: internalModifier,
    style: (0, _extends2.default)({}, style, {
      '--Button-border-radius': borderRadius != null ? (0, _typography.pxToRem)(borderRadius) : null,
      '--Button-bullet-color': hasBullet && bulletColor ? bulletColor : null
    }),
    type: internalTag === 'button' ? 'button' : null,
    as: internalTag,
    disabled: internalTag === 'button' ? disabled : null
  }, props), children);
};

exports.Button = Button;
Button.propTypes = {
  tag: _propTypes.default.string,
  borderRadius: _propTypes.default.number,
  rounded: _propTypes.default.bool,
  size: _propTypes.default.oneOf(buttonSizes),
  fit: _propTypes.default.oneOf(buttonFitOptions),
  mobileFit: _propTypes.default.oneOf(buttonMobileFitOptions),
  modifier: _propTypes.default.oneOf([].concat(buttonModifiers, deprecatedModifiers)),
  active: _propTypes.default.bool,
  hasBullet: _propTypes.default.bool,
  bulletColor: _propTypes.default.string
};
Button.defaultProps = {
  tag: 'button',
  rounded: false,
  borderRadius: null,
  size: 'medium',
  modifier: 'hydrogen',
  fit: 'min-width',
  mobileFit: null,
  active: false,
  hasBullet: false
};