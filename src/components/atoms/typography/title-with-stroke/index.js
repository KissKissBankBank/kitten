"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleWithStroke = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _titleModifierStyles = require("../common/title-modifier-styles");

var _strokeModifierStyles = require("../../../atoms/horizontal-stroke/common/stroke-modifier-styles");

var StyledTitleWithStroke = _styledComponents.default.div.withConfig({
  displayName: "title-with-stroke__StyledTitleWithStroke",
  componentId: "ie3pvx-0"
})(["--TitleWithStroke-css-color:", ";color:", ";color:var(--TitleWithStroke-css-color);&.k-TitleWithStroke--align-left{text-align:left;}&.k-TitleWithStroke--align-center{text-align:center;}&.k-TitleWithStroke--align-right{text-align:right;}.k-TitleWithStroke__title{margin-top:0;margin-bottom:0;", ";color:currentColor;}", " &.k-TitleWithStroke--italic .k-TitleWithStroke__title{font-style:italic;}.k-TitleWithStroke__stroke{display:inline-block;background-color:currentColor;border:none;}", ""], _colorsConfig.default.font1, _colorsConfig.default.font1, _typographyConfig.default.fontStyles.bold, (0, _titleModifierStyles.titleModifierStyles)('.k-TitleWithStroke__title'), (0, _strokeModifierStyles.strokeModifierStyles)('.k-TitleWithStroke__stroke'));

var TitleWithStroke = function TitleWithStroke(_ref) {
  var modifier = _ref.modifier,
      tag = _ref.tag,
      align = _ref.align,
      italic = _ref.italic,
      className = _ref.className,
      children = _ref.children,
      cssColor = _ref.cssColor,
      other = (0, _objectWithoutProperties2.default)(_ref, ["modifier", "tag", "align", "italic", "className", "children", "cssColor"]);
  var TitleComponent = tag;
  return /*#__PURE__*/_react.default.createElement(StyledTitleWithStroke, (0, _extends2.default)({
    className: (0, _classnames.default)('k-TitleWithStroke', className, "k-TitleWithStroke--".concat(modifier), "k-TitleWithStroke--align-".concat(align), {
      'k-TitleWithStroke--italic': italic
    }),
    style: {
      '--TitleWithStroke-css-color': cssColor
    }
  }, other), /*#__PURE__*/_react.default.createElement(TitleComponent, {
    className: (0, _classnames.default)('k-TitleWithStroke__title', "k-TitleWithStroke__title--".concat(modifier))
  }, children), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('k-TitleWithStroke__stroke', "k-TitleWithStroke__stroke--".concat(modifier))
  }));
};

exports.TitleWithStroke = TitleWithStroke;
TitleWithStroke.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  align: 'left',
  italic: false,
  cssColor: null
};
TitleWithStroke.propTypes = {
  /**
    Specify Title element tag.
  */
  tag: _propTypes.default.string,

  /**
    TitleWithStroke has seven modifiers,
    with different sizes depending on the device (desktop, tablet and mobile).
  */
  modifier: _propTypes.default.oneOf(_titleModifierStyles.titleModifiersNames),

  /**
    Align title and stroke.
  */
  align: _propTypes.default.oneOf(['left', 'center', 'right']),

  /**
    Use `font-style: italic`.
  */
  italic: _propTypes.default.bool,

  /**
    Specify a color (use a CSS color string).
  */
  cssColor: _propTypes.default.string
};