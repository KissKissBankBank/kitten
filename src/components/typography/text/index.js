"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.allowedColorStrings = exports.Text = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _deprecated = require("../../../helpers/utils/deprecated");

const allowedColorStrings = ['font1', 'font2', 'primary1', 'background1', 'error', 'valid', 'grey-000', 'grey-100', 'grey-200', 'grey-300', 'grey-400', 'grey-500', 'grey-600', 'grey-700', 'grey-800', 'grey-900', 'primary-100', 'primary-300', 'primary-500', 'primary-700', 'primary-900', 'danger-100', 'danger-300', 'danger-500', 'danger-700', 'danger-900', 'success-100', 'success-300', 'success-500', 'success-700', 'success-900', 'warning-100', 'warning-300', 'warning-500', 'warning-700', 'warning-900'];
exports.allowedColorStrings = allowedColorStrings;

const Text = _ref => {
  let {
    className,
    color,
    cssColor,
    decoration,
    lineHeight,
    setting,
    size,
    fontStyle,
    tag,
    as,
    transform,
    weight,
    style,
    family,
    letterSpacing,
    ...others
  } = _ref;
  (0, _deprecated.checkDeprecatedWeights)(weight);
  const Tag = as || tag;
  const textClassName = (0, _classnames.default)({
    // Color.
    'k-u-color-font1': color === 'font1',
    'k-u-color-font2': color === 'font2',
    'k-u-color-primary1': color === 'primary1',
    'k-u-color-background1': color === 'background1',
    'k-u-color-error': color === 'error',
    'k-u-color-valid': color === 'valid',
    'k-u-color-grey-000': color === 'grey-000',
    'k-u-color-grey-100': color === 'grey-100',
    'k-u-color-grey-200': color === 'grey-200',
    'k-u-color-grey-300': color === 'grey-300',
    'k-u-color-grey-400': color === 'grey-400',
    'k-u-color-grey-500': color === 'grey-500',
    'k-u-color-grey-600': color === 'grey-600',
    'k-u-color-grey-700': color === 'grey-700',
    'k-u-color-grey-800': color === 'grey-800',
    'k-u-color-grey-900': color === 'grey-900',
    'k-u-color-primary-100': color === 'primary-100',
    'k-u-color-primary-300': color === 'primary-300',
    'k-u-color-primary-500': color === 'primary-500',
    'k-u-color-primary-700': color === 'primary-700',
    'k-u-color-primary-900': color === 'primary-900',
    'k-u-color-danger-100': color === 'danger-100',
    'k-u-color-danger-300': color === 'danger-300',
    'k-u-color-danger-500': color === 'danger-500',
    'k-u-color-danger-700': color === 'danger-700',
    'k-u-color-danger-900': color === 'danger-900',
    'k-u-color-success-100': color === 'success-100',
    'k-u-color-success-300': color === 'success-300',
    'k-u-color-success-500': color === 'success-500',
    'k-u-color-success-700': color === 'success-700',
    'k-u-color-success-900': color === 'success-900',
    'k-u-color-warning-100': color === 'warning-100',
    'k-u-color-warning-300': color === 'warning-300',
    'k-u-color-warning-500': color === 'warning-500',
    'k-u-color-warning-700': color === 'warning-700',
    'k-u-color-warning-900': color === 'warning-900',
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
    'k-u-size-large': size == 'large',
    'k-u-size-medium': size == 'medium',
    'k-u-size-small': size == 'small',
    'k-u-size-micro': size == 'micro',
    'k-u-size-nano': size == 'nano',
    // Style.
    'k-u-style-normal': fontStyle == 'normal',
    'k-u-style-italic': fontStyle == 'italic',
    // Transform.
    'k-u-transform-uppercase': transform == 'uppercase',
    // Weight.
    'k-u-weight-400': weight == '400' && family !== 'antiqueolive',
    'k-u-weight-500': weight == '500' && family !== 'antiqueolive',
    'k-u-weight-600': weight == '600' && family !== 'antiqueolive',
    'k-u-weight-700': weight == '700' && family !== 'antiqueolive',
    // Font family
    'k-u-font-family-antiqueolive': family === 'antiqueolive',
    'k-u-font-family-generalsans': family === 'generalsans'
  }, className);
  return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({}, others, {
    className: textClassName,
    style: { ...(cssColor && {
        color: cssColor
      }),
      ...style
    }
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
  family: _propTypes.default.oneOf(['generalsans', 'antiqueolive']),
  fontStyle: _propTypes.default.oneOf(['normal', 'italic']),
  transform: _propTypes.default.oneOf(['uppercase']),
  weight: _propTypes.default.oneOf(['400', '500', '600', '700']),
  letterSpacing: _propTypes.default.string
};
Text.defaultProps = {
  className: null,
  color: null,
  cssColor: null,
  decoration: null,
  lineHeight: null,
  setting: null,
  family: null,
  size: null,
  fontStyle: null,
  tag: 'span',
  transform: null,
  weight: '400',
  letterSpacing: null
};