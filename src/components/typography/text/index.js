"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var StyledText = _styledComponents.default.span.withConfig({
  displayName: "text__StyledText",
  componentId: "sc-1jqe2sw-0"
})(["", ""], function (_ref) {
  var cssColor = _ref.cssColor;
  return cssColor && (0, _styledComponents.css)(["color:", ";"], cssColor);
});

var Text = function Text(_ref2) {
  var className = _ref2.className,
      color = _ref2.color,
      cssColor = _ref2.cssColor,
      decoration = _ref2.decoration,
      lineHeight = _ref2.lineHeight,
      setting = _ref2.setting,
      size = _ref2.size,
      fontStyle = _ref2.fontStyle,
      tag = _ref2.tag,
      transform = _ref2.transform,
      weight = _ref2.weight,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["className", "color", "cssColor", "decoration", "lineHeight", "setting", "size", "fontStyle", "tag", "transform", "weight"]);
  var textClassName = (0, _classnames.default)({
    // Color.
    'k-u-color-font1': color == 'font1',
    'k-u-color-font2': color == 'font2',
    'k-u-color-primary1': color == 'primary1',
    'k-u-color-background1': color == 'background1',
    'k-u-color-error': color == 'error',
    'k-u-color-valid': color == 'valid',
    // Decoration.
    'k-u-decoration-underline': decoration == 'underline',
    'k-u-decoration-none': decoration == 'none',
    // Line height.
    'k-u-line-height-normal': lineHeight == 'normal',
    'k-u-line-height-1': lineHeight == '1',
    'k-u-line-height-1-3': lineHeight == '1.3',
    // Font Feature Settings.
    'k-u-font-setting-tnum': setting == 'tnum',
    // Monospaced numbers.
    // Size.
    'k-u-size-giant': size == 'giant',
    'k-u-size-huge': size == 'huge',
    'k-u-size-big': size == 'big',
    'k-u-size-default': size == 'default',
    'k-u-size-tiny': size == 'tiny',
    'k-u-size-micro': size == 'micro',
    'k-u-size-nano': size == 'nano',
    // Style.
    'k-u-style-normal': fontStyle == 'normal',
    'k-u-style-italic': fontStyle == 'italic',
    // Transform.
    'k-u-transform-uppercase': transform == 'uppercase',
    // Weight.
    'k-u-weight-light': weight == 'light',
    'k-u-weight-regular': weight == 'regular',
    'k-u-weight-bold': weight == 'bold'
  }, className);
  return /*#__PURE__*/_react.default.createElement(StyledText, (0, _extends2.default)({
    as: tag
  }, others, {
    className: textClassName
  }));
};

exports.Text = Text;
Text.propTypes = {
  /**
    Available colors:
  */
  color: _propTypes.default.oneOf(['font1', 'font2', 'primary1', 'background1', 'error', 'valid']),

  /**
    Specify a custom color (as a CSS color string).
  */
  cssColor: _propTypes.default.string,

  /**
    If `tag="a"`, show underline.
  */
  decoration: _propTypes.default.oneOf(['underline', 'none']),

  /**
    `font-feature-settings: 'tnum'` enables tabular (monospace) numerals.
  **/
  setting: _propTypes.default.oneOf(['tnum']),

  /**
    `line-height: normal` correspond approximately to 1.2.
  */
  lineHeight: _propTypes.default.oneOf(['normal', '1', '1.3']),

  /**
    Available sizes:
  */
  size: _propTypes.default.oneOf(['giant', 'huge', 'big', 'default', 'tiny', 'micro', 'nano']),

  /**
    Available font styles (`normal` or `italic`):
  */
  fontStyle: _propTypes.default.oneOf(['normal', 'italic']),

  /**
    `text-transform: uppercase`
  */
  transform: _propTypes.default.oneOf(['uppercase']),

  /**
    Available font weights (`light`, `regular` or `italic`):
  */
  weight: _propTypes.default.oneOf(['light', 'regular', 'bold'])
};
Text.defaultProps = {
  className: null,
  color: null,
  cssColor: null,
  decoration: null,
  lineHeight: null,
  setting: null,
  size: null,
  fontStyle: null,
  tag: 'span',
  transform: null,
  weight: null
};