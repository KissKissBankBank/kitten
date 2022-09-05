"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TagButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

const StyledTagButton = _styledComponents.default.button.withConfig({
  displayName: "tag-button__StyledTagButton",
  componentId: "sc-9e8qw0-0"
})(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";display:inline-flex;align-items:center;justify-content:center;position:relative;border-radius:var(--border-radius-s);border-width:var(--border-width);border-style:solid;transition:background-color 0.2s,color 0.2s,border-color 0.2s;box-sizing:border-box;", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;cursor:pointer;&.k-TagButton--rounded{border-radius:var(--border-radius-rounded);}&:disabled{cursor:not-allowed;}> :nth-child(n){margin-right:", ";text-align:left;}background-color:", ";border:var(--border);color:", ";&:hover,&:focus{border:var(--border-hover-primary);background-color:", ";color:", ";}&:active{background-color:", ";border:var(--border-active-primary);color:", ";}&.k-TagButton--small{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-TagButton--large{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-TagButton--huge{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&:disabled{cursor:not-allowed;border:var(--border-disabled);background-color:", ";color:", ";}&.k-TagButton--active{background-color:", ";border:var(--border-active-primary);color:", ";&:hover,&:focus,&:active{border-color:var(--color-primary-700);}}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-2), _typographyConfig.default.fontStyles['500'], (0, _typography.stepToRem)(-2), _colorsConfig.default.font1, (0, _typography.pxToRem)(10), _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.font1, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), _colorsConfig.default.line1, _colorsConfig.default.font3, _colorsConfig.default.primary5, _colorsConfig.default.font1);

const TagButton = _ref => {
  let {
    className,
    children,
    rounded,
    active,
    size,
    tag,
    as,
    ...props
  } = _ref;

  const others = (_ref2 => {
    let {
      modifier,
      icon,
      ...rest
    } = _ref2;
    return rest;
  })(props);

  return /*#__PURE__*/_react.default.createElement(StyledTagButton, (0, _extends2.default)({
    type: !tag && !as ? 'button' : null,
    className: (0, _classnames.default)('k-TagButton', className, "k-TagButton--" + size, {
      'k-TagButton--active': active,
      'k-TagButton--rounded': rounded
    }),
    as: tag || as
  }, others), children);
};

exports.TagButton = TagButton;
TagButton.propTypes = {
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'huge']),
  active: _propTypes.default.bool,
  rounded: _propTypes.default.bool
};
TagButton.defaultProps = {
  children: 'Tag',
  size: 'medium',
  active: false,
  rounded: false
};