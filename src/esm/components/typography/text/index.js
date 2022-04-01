import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "color", "cssColor", "decoration", "lineHeight", "setting", "size", "fontStyle", "tag", "as", "transform", "weight", "style", "letterSpacing"];
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated';
export var allowedColorStrings = ['font1', 'font2', 'primary1', 'background1', 'error', 'valid', 'grey-000', 'grey-100', 'grey-200', 'grey-300', 'grey-400', 'grey-500', 'grey-600', 'grey-700', 'grey-800', 'grey-900', 'primary-100', 'primary-300', 'primary-500', 'primary-700', 'primary-900', 'danger-100', 'danger-300', 'danger-500', 'danger-700', 'danger-900', 'success-100', 'success-300', 'success-500', 'success-700', 'success-900', 'warning-100', 'warning-300', 'warning-500', 'warning-700', 'warning-900'];
export var Text = function Text(_ref) {
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
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  checkDeprecatedSizes(size);
  var Tag = as || tag;
  var textClassName = classNames((_classNames = {}, _classNames["k-u-color-" + color] = allowedColorStrings.includes(color), _classNames['k-u-decoration-underline'] = decoration == 'underline', _classNames['k-u-decoration-none'] = decoration == 'none', _classNames['k-u-letter-spacing-10'] = letterSpacing == '10%', _classNames['k-u-line-height-normal'] = lineHeight == 'normal', _classNames['k-u-line-height-1'] = lineHeight == '1', _classNames['k-u-line-height-1-25'] = lineHeight == '1.25', _classNames['k-u-line-height-1-3'] = lineHeight == '1.3', _classNames['k-u-line-height-1-4'] = lineHeight == '1.4', _classNames['k-u-font-setting-tnum'] = setting == 'tnum', _classNames['k-u-size-giant'] = size == 'giant', _classNames['k-u-size-huge'] = size == 'huge', _classNames['k-u-size-big'] = size == 'big', _classNames['k-u-size-large'] = size == 'large', _classNames['k-u-size-default'] = size == 'default', _classNames['k-u-size-medium'] = size == 'medium', _classNames['k-u-size-tiny'] = size == 'tiny', _classNames['k-u-size-small'] = size == 'small', _classNames['k-u-size-micro'] = size == 'micro', _classNames['k-u-size-nano'] = size == 'nano', _classNames['k-u-style-normal'] = fontStyle == 'normal', _classNames['k-u-style-italic'] = fontStyle == 'italic', _classNames['k-u-transform-uppercase'] = transform == 'uppercase', _classNames['k-u-weight-light'] = weight == 'light', _classNames['k-u-weight-regular'] = weight == 'regular', _classNames['k-u-weight-bold'] = weight == 'bold', _classNames), className);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, others, {
    className: textClassName,
    style: cssColor ? _extends({
      color: cssColor
    }, style) : style
  }));
};
Text.propTypes = {
  color: PropTypes.oneOf(allowedColorStrings),
  cssColor: PropTypes.string,
  decoration: PropTypes.oneOf(['underline', 'none']),
  setting: PropTypes.oneOf(['tnum']),
  lineHeight: PropTypes.oneOf(['normal', '1', '1.25', '1.3', '1.4']),
  size: PropTypes.oneOf(['giant', 'huge', 'large', 'medium', 'small', 'micro', 'nano']),
  fontStyle: PropTypes.oneOf(['normal', 'italic']),
  transform: PropTypes.oneOf(['uppercase']),
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
  letterSpacing: PropTypes.string
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