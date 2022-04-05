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

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _deprecated2 = require("../../../helpers/utils/deprecated");

var _excluded = ["children", "selected", "active", "className", "size", "tag", "as"],
    _excluded2 = ["modifier", "icon"];

var StyledTagButton = _styledComponents.default.button.withConfig({
  displayName: "tag-button__StyledTagButton",
  componentId: "sc-9e8qw0-0"
})(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";display:inline-flex;align-items:center;justify-content:center;position:relative;border-radius:var(--border-radius-s);border-width:var(--border-width);border-style:solid;transition:background-color 0.2s,color 0.2s,border-color 0.2s;box-sizing:border-box;", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;cursor:pointer;&:disabled{cursor:not-allowed;}>:nth-child(n){margin-right:", ";text-align:left;}background-color:", ";border:var(--border);color:", ";&:hover,&:focus{border:var(--border-hover-primary);background-color:", ";color:", ";}&:active{background-color:", ";border:var(--border-active-primary);color:", ";}&.k-Buttons__tagButton--tiny,&.k-Buttons__tagButton--small{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-Buttons__tagButton--big,&.k-Buttons__tagButton--large{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-Buttons__tagButton--huge{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&:disabled{cursor:not-allowed;border:var(--border-disabled);background-color:", ";color:", ";}&.k-Buttons__tagButton--active{background-color:", ";border:var(--border-active-primary);color:", ";&:hover,&:focus,&:active{border-color:var(--color-primary-700);}}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-2), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-2), _colorsConfig.default.font1, (0, _typography.pxToRem)(10), _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.font1, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), _colorsConfig.default.line1, _colorsConfig.default.font3, _colorsConfig.default.primary5, _colorsConfig.default.font1);

var TagButton = function TagButton(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      active = _ref.active,
      className = _ref.className,
      size = _ref.size,
      tag = _ref.tag,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var others = function (_ref2) {
    var modifier = _ref2.modifier,
        icon = _ref2.icon,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
    return rest;
  }(props);

  (0, _deprecated2.checkDeprecatedSizes)(size);
  return /*#__PURE__*/_react.default.createElement(StyledTagButton, (0, _extends2.default)({
    type: !tag && !as ? 'button' : null,
    className: (0, _classnames.default)('k-Buttons__tagButton', className, "k-Buttons__tagButton--" + size, {
      'k-Buttons__tagButton--active': active || selected
    }),
    as: tag || as
  }, others), children);
};

exports.TagButton = TagButton;
TagButton.propTypes = {
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'huge']),
  active: _propTypes.default.bool,
  icon: (0, _deprecated.default)(_propTypes.default.bool, 'Icon is not implemented anymore.'),
  modifier: (0, _deprecated.default)(_propTypes.default.string, 'Modifiers are not implemented anymore.'),
  selected: (0, _deprecated.default)(_propTypes.default.bool, 'Please use `active` instead')
};
TagButton.defaultProps = {
  children: 'Tag',
  size: 'medium',
  active: false
};