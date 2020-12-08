"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _classnames = _interopRequireDefault(require("classnames"));

var StyledTagButton = (0, _styledComponents.default)(function (_ref) {
  var selected = _ref.selected,
      icon = _ref.icon,
      tiny = _ref.tiny,
      big = _ref.big,
      modifier = _ref.modifier,
      others = (0, _objectWithoutProperties2.default)(_ref, ["selected", "icon", "tiny", "big", "modifier"]);
  return /*#__PURE__*/_react.default.createElement("button", others);
}).withConfig({
  displayName: "tag-button__StyledTagButton",
  componentId: "sc-1cbu4s-0"
})(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}display:inline-flex;align-items:center;justify-content:center;position:relative;border-radius:", ";border-width:", ";border-style:solid;transition:background-color 0.2s,color 0.2s,border-color 0.2s;box-sizing:border-box;", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;outline:none;cursor:pointer;:disabled{cursor:not-allowed;}>:nth-child(n){margin-right:", ";text-align:left;}&.k-Buttons__tagButton--icon{color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}}&.k-Buttons__tagButton--tiny{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}}&.k-Buttons__tagButton--big{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}}&.k-Buttons__tagButton--huge{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}}&.k-Buttons__tagButton--helium,&.k-Buttons__tagButton--hydrogen{color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}}&.k-Buttons__tagButton--carbon{color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}}&.k-Buttons__tagButton--selected{color:", ";border-color:", ";background-color:", ";}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(2), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-2), _colorsConfig.default.font1, (0, _typography.pxToRem)(10), _colorsConfig.default.font1, _colorsConfig.default.line1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.background1, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(80), _colorsConfig.default.font1, _colorsConfig.default.line1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1);

var TagButton = function TagButton(_ref2) {
  var children = _ref2.children,
      modifier = _ref2.modifier,
      selected = _ref2.selected,
      tiny = _ref2.tiny,
      big = _ref2.big,
      huge = _ref2.huge,
      icon = _ref2.icon,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["children", "modifier", "selected", "tiny", "big", "huge", "icon"]);
  return /*#__PURE__*/_react.default.createElement(StyledTagButton, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Buttons__tagButton', "k-Buttons__tagButton--".concat(modifier), {
      'k-Buttons__tagButton--tiny': tiny,
      'k-Buttons__tagButton--big': big,
      'k-Buttons__tagButton--huge': huge,
      'k-Buttons__tagButton--selected': selected,
      'k-Buttons__tagButton--icon': icon
    })
  }, others), children);
};

exports.TagButton = TagButton;
TagButton.propTypes = {
  modifier: _propTypes.default.oneOf(['helium', 'hydrogen', 'carbon']),
  tiny: _propTypes.default.bool,
  big: _propTypes.default.bool,
  huge: _propTypes.default.bool,
  icon: _propTypes.default.bool,
  selected: _propTypes.default.bool
};
TagButton.defaultProps = {
  children: 'Tag',
  modifier: 'hydrogen',
  icon: false,
  tiny: false,
  big: false,
  huge: false,
  selected: false
};