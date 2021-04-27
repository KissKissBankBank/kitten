"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _titleModifierStyles = require("../common/title-modifier-styles");

var StyledTitle = _styledComponents.default.span.withConfig({
  displayName: "title__StyledTitle",
  componentId: "sc-46lshq-0"
})(["--Title-css-color:", ";", ";color:", ";color:var(--Title-css-color);&.k-Title--noMargin{margin-top:0;margin-bottom:0;}&.k-Title--italic{font-style:italic;}", ""], _colorsConfig.default.font1, _typographyConfig.default.fontStyles.bold, _colorsConfig.default.font1, (0, _titleModifierStyles.titleModifierStyles)('&.k-Title'));

var Title = function Title(_ref) {
  var modifier = _ref.modifier,
      tag = _ref.tag,
      noMargin = _ref.noMargin,
      italic = _ref.italic,
      cssColor = _ref.cssColor,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["modifier", "tag", "noMargin", "italic", "cssColor", "className"]);
  return /*#__PURE__*/_react.default.createElement(StyledTitle, (0, _extends2.default)({
    as: tag,
    modifier: modifier,
    className: (0, _classnames.default)('k-Title', className, "k-Title--".concat(modifier), {
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

  /**
    Title have seven modifiers. With different size depending on the device (desktop, tablet and mobile)
  */
  modifier: _propTypes.default.oneOf(_titleModifierStyles.titleModifiersNames),

  /**
    Remove default margins of `title` attribut.
  */
  noMargin: _propTypes.default.bool,

  /**
    Specify a color (use a CSS color string).
  */
  cssColor: _propTypes.default.string,

  /**
    Use `font-style: italic`.
  */
  italic: _propTypes.default.bool
};