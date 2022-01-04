"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TagButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _excluded = ["children", "modifier", "selected", "active", "tiny", "big", "huge", "icon", "className", "variant", "size", "tag", "as"];

var StyledTagButton = _styledComponents.default.button.withConfig({
  displayName: "tag-button__StyledTagButton",
  componentId: "sc-1kq5kfr-0"
})(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";display:inline-flex;align-items:center;justify-content:center;position:relative;border-radius:var(--border-radius-s);border-width:var(--border-width);border-style:solid;transition:background-color 0.2s,color 0.2s,border-color 0.2s;box-sizing:border-box;", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;cursor:pointer;&.k-Buttons__tagButton--orion{&.k-Buttons__tagButton--hydrogen{background-color:", ";border:var(--border);color:", ";&:hover,&:focus{border:var(--border-hover-primary);background-color:", ";color:", ";}&:active{background-color:", ";border:var(--border-active-primary);color:", ";}&:disabled{cursor:not-allowed;border:var(--border-disabled);background-color:", ";color:", ";}&.k-Buttons__tagButton--active{background-color:", ";border:var(--border-active-primary);color:", ";&:hover,&:focus,&:active{border-color:var(--color-primary-700);}}}}&:disabled{cursor:not-allowed;}>:nth-child(n){margin-right:", ";text-align:left;}&.k-Buttons__tagButton--icon{color:", ";border-color:var(--color-grey-400);background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}}&.k-Buttons__tagButton--tiny{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-Buttons__tagButton--big{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-Buttons__tagButton--huge{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-Buttons__tagButton--helium,&.k-Buttons__tagButton--hydrogen{color:", ";border:var(--border);background-color:", ";&:hover,&:focus{color:", ";border:var(--border-hover-primary);background-color:", ";}&:active{color:", ";border:var(--border-active-primary);background-color:", ";}&:disabled{background-color:", ";border-color:", ";color:", ";}}&.k-Buttons__tagButton--carbon{color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}&:disabled{background-color:", ";border-color:", ";color:", ";}}&.k-Buttons__tagButton--active{color:", ";border:var(--border-active-primary);background-color:", ";&:hover,&:focus,&:active{border-color:var(--color-primary-700);}}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-2), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-2), _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.line1, _colorsConfig.default.font3, _colorsConfig.default.primary5, _colorsConfig.default.font1, (0, _typography.pxToRem)(10), _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.background1, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary1);

var TagButton = function TagButton(_ref) {
  var children = _ref.children,
      modifier = _ref.modifier,
      selected = _ref.selected,
      active = _ref.active,
      tiny = _ref.tiny,
      big = _ref.big,
      huge = _ref.huge,
      icon = _ref.icon,
      className = _ref.className,
      variant = _ref.variant,
      size = _ref.size,
      tag = _ref.tag,
      as = _ref.as,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledTagButton, (0, _extends2.default)({
    type: !tag && !as ? 'button' : null,
    className: (0, _classnames.default)('k-Buttons__tagButton', className, "k-Buttons__tagButton--" + modifier, "k-Buttons__tagButton--" + variant, "k-Buttons__tagButton--" + size, {
      'k-Buttons__tagButton--active': active || selected,
      'k-Buttons__tagButton--icon': icon
    }),
    as: tag || as
  }, others), children);
};

exports.TagButton = TagButton;
TagButton.propTypes = {
  modifier: _propTypes.default.oneOf(['helium', 'hydrogen', 'carbon']),
  size: _propTypes.default.oneOf(['tiny', 'regular', 'big', 'huge']),
  icon: _propTypes.default.bool,
  active: _propTypes.default.bool,
  selected: (0, _deprecated.default)(_propTypes.default.bool, 'Please use `active` instead.'),
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};
TagButton.defaultProps = {
  children: 'Tag',
  modifier: 'hydrogen',
  icon: false,
  size: 'regular',
  active: false,
  variant: 'orion'
};