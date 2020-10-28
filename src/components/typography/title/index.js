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

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _modifierStyles = require("./helpers/modifier-styles");

var StyledTitle = _styledComponents.default.span.withConfig({
  displayName: "title__StyledTitle",
  componentId: "sc-46lshq-0"
})(["", ";", " ", " ", " ", ""], _typographyConfig.default.fontStyles.bold, function (_ref) {
  var modifier = _ref.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
}, function (_ref2) {
  var margin = _ref2.margin;
  return !margin && (0, _styledComponents.css)(["margin-top:0;margin-bottom:0;"]);
}, function (_ref3) {
  var italic = _ref3.italic;
  return italic && (0, _styledComponents.css)(["font-style:italic;"]);
}, function (_ref4) {
  var cssColor = _ref4.cssColor;
  return cssColor && (0, _styledComponents.css)(["color:", ";"], cssColor);
});

var Title = function Title(_ref5) {
  var modifier = _ref5.modifier,
      tag = _ref5.tag,
      margin = _ref5.margin,
      italic = _ref5.italic,
      cssColor = _ref5.cssColor,
      other = (0, _objectWithoutProperties2.default)(_ref5, ["modifier", "tag", "margin", "italic", "cssColor"]);
  return /*#__PURE__*/_react.default.createElement(StyledTitle, (0, _extends2.default)({
    as: tag
  }, other, {
    modifier: modifier,
    margin: margin,
    italic: italic,
    cssColor: cssColor
  }));
};

exports.Title = Title;
Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  margin: true,
  italic: false,
  cssColor: null
};
Title.propTypes = {
  tag: _propTypes.default.string,

  /**
    Title have seven modifiers. With different size depending on the device (desktop, tablet and mobile)
  */
  modifier: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary']),

  /**
    Remove default margins of `title` attribut.
  */
  margin: _propTypes.default.bool,

  /**
    Specify a color (use a CSS color string).
  */
  cssColor: _propTypes.default.string,

  /**
    Use `font-style: italic`.
  */
  italic: _propTypes.default.bool
};