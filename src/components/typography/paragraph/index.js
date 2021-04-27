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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _modifierStyles = require("./helpers/modifier-styles");

var modifierList = ['primary', 'secondary', 'tertiary', 'quaternary'];

var StyledParagraph = _styledComponents.default.p.withConfig({
  displayName: "paragraph__StyledParagraph",
  componentId: "sc-1qoa9gz-0"
})(["", ";&.k-Paragraph--noMargin{margin-top:0;margin-bottom:0;}&.k-Paragraph--normalLineHeight{line-height:normal;}&.k-Paragraph--italic{font-style:italic;}", ""], _typographyConfig.default.fontStyles.light, function () {
  return modifierList.map(function (modifier) {
    return (0, _styledComponents.css)(["&.k-Paragraph--", "{", "}"], modifier, function () {
      return (0, _modifierStyles.modifierStyles)(modifier);
    });
  });
});

var Paragraph = function Paragraph(_ref) {
  var tag = _ref.tag,
      modifier = _ref.modifier,
      noMargin = _ref.noMargin,
      normalLineHeight = _ref.normalLineHeight,
      italic = _ref.italic,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["tag", "modifier", "noMargin", "normalLineHeight", "italic", "className"]);
  return /*#__PURE__*/_react.default.createElement(StyledParagraph, (0, _extends2.default)({
    as: tag,
    modifier: modifier,
    className: (0, _classnames.default)('k-Paragraph', className, "k-Paragraph--".concat(modifier), {
      'k-Paragraph--noMargin': noMargin,
      'k-Paragraph--normalLineHeight': normalLineHeight,
      'k-Paragraph--italic': italic
    })
  }, other));
};

exports.Paragraph = Paragraph;
Paragraph.defaultProps = {
  tag: 'p',
  modifier: 'primary',
  noMargin: false,
  normalLineHeight: false,
  italic: false
};
Paragraph.propTypes = {
  tag: _propTypes.default.string,

  /**
    Title have seven modifiers. With different size depending on the device (`desktop`, `tablet` and `mobile`).
  */
  modifier: _propTypes.default.oneOf(modifierList),

  /**
    Remove default margins of `title` attribut.
  */
  noMargin: _propTypes.default.bool,

  /**
    Line-height normal (1.2).
  */
  normalLineHeight: _propTypes.default.bool,

  /**
    Use `font-style: italic`.
  */
  italic: _propTypes.default.bool
};