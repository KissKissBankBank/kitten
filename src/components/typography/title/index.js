"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Title = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _titleModifierStyles = require("../common/title-modifier-styles");

const StyledTitle = _styledComponents.default.span.withConfig({
  displayName: "title__StyledTitle",
  componentId: "sc-46lshq-0"
})(["--Title-css-color:", ";font-family:var(--font-family-antiqueolive);letterspacing:'.01rem';fontweight:700;color:var(--Title-css-color);&.k-Title--noMargin{margin-top:0;margin-bottom:0;}&.k-Title--italic{font-style:italic;}", ""], _colorsConfig.default.font1, (0, _titleModifierStyles.titleModifierStyles)('&.k-Title'));

const Title = _ref => {
  let {
    modifier,
    tag,
    noMargin,
    italic,
    cssColor,
    className,
    ...other
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledTitle, (0, _extends2.default)({
    as: tag,
    modifier: modifier,
    className: (0, _classnames.default)('k-Title', className, "k-Title--" + modifier, {
      'k-Title--noMargin': noMargin,
      'k-Title--italic': italic
    }),
    style: {
      '--Title-css-color': cssColor
    }
  }, other));
};

exports.Title = Title;
Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  noMargin: false,
  italic: false,
  cssColor: null
};
Title.propTypes = {
  tag: _propTypes.default.string,
  modifier: _propTypes.default.oneOf(_titleModifierStyles.titleModifiersNames),
  noMargin: _propTypes.default.bool,
  cssColor: _propTypes.default.string,
  italic: _propTypes.default.bool
};