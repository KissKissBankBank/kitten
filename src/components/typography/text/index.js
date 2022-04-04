"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.allowedColorStrings = exports.Text = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = require("../../../helpers/utils/deprecated");

var _excluded = ["className", "color", "cssColor", "decoration", "lineHeight", "setting", "size", "fontStyle", "tag", "as", "transform", "weight", "style", "letterSpacing"];
var allowedColorStrings = ['font1', 'font2', 'primary1', 'background1', 'error', 'valid', 'grey-000', 'grey-100', 'grey-200', 'grey-300', 'grey-400', 'grey-500', 'grey-600', 'grey-700', 'grey-800', 'grey-900', 'primary-100', 'primary-300', 'primary-500', 'primary-700', 'primary-900', 'danger-100', 'danger-300', 'danger-500', 'danger-700', 'danger-900', 'success-100', 'success-300', 'success-500', 'success-700', 'success-900', 'warning-100', 'warning-300', 'warning-500', 'warning-700', 'warning-900'];
exports.allowedColorStrings = allowedColorStrings;

var Text = function Text(_ref) {
  var _classNames;

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
  var textClassName = (0, _classnames.default)((_classNames = {}, _classNames["k-u-color-" + color] = allowedColorStrings.includes(color), _classNames['k-u-decoration-underline'] = decoration == 'underline', _classNames['k-u-decoration-none'] = decoration == 'none', _classNames['k-u-letter-spacing-10'] = letterSpacing == '10%', _classNames['k-u-line-height-normal'] = lineHeight == 'normal', _classNames['k-u-line-height-1'] = lineHeight == '1', _classNames['k-u-line-height-1-25'] = lineHeight == '1.25', _classNames['k-u-line-height-1-3'] = lineHeight == '1.3', _classNames['k-u-line-height-1-4'] = lineHeight == '1.4', _classNames['k-u-font-setting-tnum'] = setting == 'tnum', _classNames['k-u-size-giant'] = size == 'giant', _classNames['k-u-size-huge'] = size == 'huge', _classNames['k-u-size-big'] = size == 'big', _classNames['k-u-size-large'] = size == 'large', _classNames['k-u-size-default'] = size == 'default', _classNames['k-u-size-medium'] = size == 'medium', _classNames['k-u-size-tiny'] = size == 'tiny', _classNames['k-u-size-small'] = size == 'small', _classNames['k-u-size-micro'] = size == 'micro', _classNames['k-u-size-nano'] = size == 'nano', _classNames['k-u-style-normal'] = fontStyle == 'normal', _classNames['k-u-style-italic'] = fontStyle == 'italic', _classNames['k-u-transform-uppercase'] = transform == 'uppercase', _classNames['k-u-weight-light'] = weight == 'light', _classNames['k-u-weight-regular'] = weight == 'regular', _classNames['k-u-weight-bold'] = weight == 'bold', _classNames), className);
  return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({}, others, {
    className: textClassName,
    style: cssColor ? (0, _extends2.default)({
      color: cssColor
    }, style) : style
  }));
};

exports.Text = Text;
Text.propTypes = {
  color: _propTypes.default.oneOf(allowedColorStrings),
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