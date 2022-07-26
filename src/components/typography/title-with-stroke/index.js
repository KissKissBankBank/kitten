"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TitleWithStroke = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _titleModifierStyles = require("../common/title-modifier-styles");

var _strokeModifierStyles = require("../../typography/horizontal-stroke/common/stroke-modifier-styles");

const StyledTitleWithStroke = _styledComponents.default.div.withConfig({
  displayName: "title-with-stroke__StyledTitleWithStroke",
  componentId: "sc-10vl00i-0"
})(["--TitleWithStroke-css-color:", ";color:var(--TitleWithStroke-css-color);&.k-TitleWithStroke--align-left{text-align:left;}&.k-TitleWithStroke--align-center{text-align:center;}&.k-TitleWithStroke--align-right{text-align:right;}.k-TitleWithStroke__title{margin-top:0;margin-bottom:0;", ";color:currentColor;}", " &.k-TitleWithStroke--italic .k-TitleWithStroke__title{font-style:italic;}.k-TitleWithStroke__stroke{display:inline-block;background-color:currentColor;border:none;}", ""], _colorsConfig.default.font1, _typographyConfig.default.fontStyles['700'], (0, _titleModifierStyles.titleModifierStyles)('.k-TitleWithStroke__title'), (0, _strokeModifierStyles.strokeModifierStyles)('.k-TitleWithStroke__stroke'));

const TitleWithStroke = _ref => {
  let {
    modifier,
    tag,
    align,
    italic,
    className,
    children,
    cssColor,
    ...other
  } = _ref;
  const TitleComponent = tag;
  return /*#__PURE__*/_react.default.createElement(StyledTitleWithStroke, (0, _extends2.default)({
    className: (0, _classnames.default)('k-TitleWithStroke', className, "k-TitleWithStroke--" + modifier, "k-TitleWithStroke--align-" + align, {
      'k-TitleWithStroke--italic': italic
    }),
    style: {
      '--TitleWithStroke-css-color': cssColor
    }
  }, other), /*#__PURE__*/_react.default.createElement(TitleComponent, {
    className: (0, _classnames.default)('k-TitleWithStroke__title', "k-TitleWithStroke__title--" + modifier)
  }, children), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('k-TitleWithStroke__stroke', "k-TitleWithStroke__stroke--" + modifier)
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
  tag: _propTypes.default.string,
  modifier: _propTypes.default.oneOf(_titleModifierStyles.titleModifiersNames),
  align: _propTypes.default.oneOf(['left', 'center', 'right']),
  italic: _propTypes.default.bool,
  cssColor: _propTypes.default.string
};