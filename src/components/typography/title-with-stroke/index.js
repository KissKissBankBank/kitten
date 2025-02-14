"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TitleWithStroke = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _strokeModifierStyles = require("../../typography/horizontal-stroke/common/stroke-modifier-styles");

var _titleModifierStyles = require("../common/title-modifier-styles");

const StyledTitleWithStroke = _styledComponents.default.div.withConfig({
  displayName: "title-with-stroke__StyledTitleWithStroke",
  componentId: "sc-10vl00i-0"
})(["--TitleWithStroke-css-color:", ";color:var(--TitleWithStroke-css-color);&.k-TitleWithStroke--align-left{text-align:left;}&.k-TitleWithStroke--align-center{text-align:center;}&.k-TitleWithStroke--align-right{text-align:right;}.k-TitleWithStroke__title{margin-block:0;", ";color:currentColor;}", " &.k-TitleWithStroke--italic .k-TitleWithStroke__title{font-style:italic;}.k-TitleWithStroke__stroke{display:inline-block;background-color:currentColor;border:none;}", " &.k-TitleWithStroke--noMargin .k-TitleWithStroke__stroke.k-TitleWithStroke__stroke{margin-bottom:0;}"], _colorsConfig.default.font1, _typographyConfig.default.fontStyles['700'], (0, _titleModifierStyles.titleModifierStyles)('.k-TitleWithStroke__title'), (0, _strokeModifierStyles.strokeModifierStyles)('.k-TitleWithStroke__stroke'));

const TitleWithStroke = _ref => {
  let {
    modifier,
    tag,
    align,
    italic,
    className,
    children,
    cssColor,
    family,
    noMargin,
    ...other
  } = _ref;
  const TitleComponent = tag;
  return /*#__PURE__*/_react.default.createElement(StyledTitleWithStroke, (0, _extends2.default)({
    className: (0, _classnames.default)('k-TitleWithStroke', className, "k-TitleWithStroke--" + modifier, "k-TitleWithStroke--align-" + align, {
      'k-TitleWithStroke--italic': italic,
      'k-TitleWithStroke--noMargin': noMargin
    }),
    style: {
      '--TitleWithStroke-css-color': cssColor
    }
  }, other), /*#__PURE__*/_react.default.createElement(TitleComponent, {
    className: (0, _classnames.default)('k-TitleWithStroke__title', "k-TitleWithStroke__title--" + modifier, {
      'k-u-font-family-antiqueolive': family === 'antiqueolive'
    })
  }, children), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('k-TitleWithStroke__stroke', "k-TitleWithStroke__stroke--" + modifier)
  }));
};

exports.TitleWithStroke = TitleWithStroke;
TitleWithStroke.defaultProps = {
  tag: 'h1',
  family: 'generalsans',
  modifier: 'primary',
  align: 'left',
  italic: false,
  cssColor: null,
  noMargin: false
};
TitleWithStroke.propTypes = {
  tag: _propTypes.default.string,
  family: _propTypes.default.oneOf(['generalsans', 'antiqueolive']),
  modifier: _propTypes.default.oneOf(_titleModifierStyles.titleModifiersNames),
  align: _propTypes.default.oneOf(['left', 'center', 'right']),
  italic: _propTypes.default.bool,
  cssColor: _propTypes.default.string,
  noMargin: _propTypes.default.bool
};