"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _modifierStyles = require("./helpers/modifier-styles");

var StyledParagraph = _styledComponents.default.p.withConfig({
  displayName: "paragraph__StyledParagraph",
  componentId: "sc-1qoa9gz-0"
})(["", ";", " ", " ", "  ", ""], _typographyConfig.default.fontStyles.light, function (_ref) {
  var modifier = _ref.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
}, function (_ref2) {
  var margin = _ref2.margin;
  return !margin && (0, _styledComponents.css)(["margin-top:0;margin-bottom:0;"]);
}, function (_ref3) {
  var normalLineHeight = _ref3.normalLineHeight;
  return normalLineHeight && (0, _styledComponents.css)(["line-height:normal;"]);
}, function (_ref4) {
  var italic = _ref4.italic;
  return italic && (0, _styledComponents.css)(["font-style:italic;"]);
});

var Paragraph = function Paragraph(_ref5) {
  var tag = _ref5.tag,
      modifier = _ref5.modifier,
      margin = _ref5.margin,
      normalLineHeight = _ref5.normalLineHeight,
      italic = _ref5.italic,
      other = (0, _objectWithoutProperties2.default)(_ref5, ["tag", "modifier", "margin", "normalLineHeight", "italic"]);
  return /*#__PURE__*/_react.default.createElement(StyledParagraph, (0, _extends2.default)({
    as: tag,
    modifier: modifier,
    normalLineHeight: normalLineHeight,
    italic: italic,
    margin: margin
  }, other));
};

exports.Paragraph = Paragraph;
Paragraph.defaultProps = {
  tag: 'p',
  modifier: 'primary',
  margin: true,
  normalLineHeight: false,
  italic: false
};
Paragraph.propTypes = {
  tag: _propTypes.default.string,

  /**
    Title have seven modifiers. With different size depending on the device (`desktop`, `tablet` and `mobile`).
  */
  modifier: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),

  /**
    Remove default margins of `title` attribut.
  */
  margin: _propTypes.default.bool,

  /**
    Line-height normal (1.2).
  */
  normalLineHeight: _propTypes.default.bool,

  /**
    Use `font-style: italic`.
  */
  italic: _propTypes.default.bool
};