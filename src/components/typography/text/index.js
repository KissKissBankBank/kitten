"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Text = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = require("../../../helpers/utils/deprecated");

var _excluded = ["className", "color", "cssColor", "decoration", "lineHeight", "setting", "size", "fontStyle", "tag", "as", "transform", "weight", "style", "letterSpacing"];

var Text = function Text(_ref) {
  var className = _ref.className,
      color = _ref.color,
      cssColor = _ref.cssColor,
      decoration = _ref.decoration,
      lineHeight = _ref.lineHeight,
      setting = _ref.setting,
      size = _ref.size,
      fontStyle = _ref.fontStyle,
      tag = _ref.tag,
      as = _ref.as,
      transform = _ref.transform,
      weight = _ref.weight,
      style = _ref.style,
      letterSpacing = _ref.letterSpacing,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  (0, _deprecated.checkDeprecatedSizes)(size);
  var Tag = as || tag;
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
    // Letter spacing.
    'k-u-letter-spacing-10': letterSpacing == '10%',
    // Line height.
    'k-u-line-height-normal': lineHeight == 'normal',
    'k-u-line-height-1': lineHeight == '1',
    'k-u-line-height-1-25': lineHeight == '1.25',
    'k-u-line-height-1-3': lineHeight == '1.3',
    'k-u-line-height-1-4': lineHeight == '1.4',
    // Font Feature Settings.
    'k-u-font-setting-tnum': setting == 'tnum',
    // Monospaced numbers.
    // Size.
    'k-u-size-giant': size == 'giant',
    'k-u-size-huge': size == 'huge',
    'k-u-size-big': size == 'big',
    // Deprecated
    'k-u-size-large': size == 'large',
    'k-u-size-default': size == 'default',
    // Deprecated
    'k-u-size-medium': size == 'medium',
    'k-u-size-tiny': size == 'tiny',
    // Deprecated
    'k-u-size-small': size == 'small',
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
  return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({}, others, {
    className: textClassName,
    style: cssColor ? (0, _extends2.default)({
      color: cssColor
    }, style) : style
  }));
};

exports.Text = Text;
Text.propTypes = {
  color: _propTypes.default.oneOf(['font1', 'font2', 'primary1', 'background1', 'error', 'valid']),
  cssColor: _propTypes.default.string,
  decoration: _propTypes.default.oneOf(['underline', 'none']),
  setting: _propTypes.default.oneOf(['tnum']),
  lineHeight: _propTypes.default.oneOf(['normal', '1', '1.25', '1.3', '1.4']),
  size: _propTypes.default.oneOf(['giant', 'huge', 'large', 'medium', 'small', 'micro', 'nano']),
  fontStyle: _propTypes.default.oneOf(['normal', 'italic']),
  transform: _propTypes.default.oneOf(['uppercase']),
  weight: _propTypes.default.oneOf(['light', 'regular', 'bold']),
  letterSpacing: _propTypes.default.string
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
  weight: 'light',
  letterSpacing: null
};