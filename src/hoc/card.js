"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.card = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var card = function card(WrappedComponent, wrappedProps) {
  var defaultProps = {
    className: null,
    light: false,
    padded: false,
    rounded: false,
    translateOnHover: false,
    withBorder: false,
    withDarkBorder: false,
    withShadow: false,
    withVerticalPadding: false
  };

  var Card = function Card(props) {
    var _defaultProps$wrapped = _objectSpread({}, defaultProps, wrappedProps, props),
        className = _defaultProps$wrapped.className,
        light = _defaultProps$wrapped.light,
        padded = _defaultProps$wrapped.padded,
        rounded = _defaultProps$wrapped.rounded,
        translateOnHover = _defaultProps$wrapped.translateOnHover,
        withBorder = _defaultProps$wrapped.withBorder,
        withDarkBorder = _defaultProps$wrapped.withDarkBorder,
        withShadow = _defaultProps$wrapped.withShadow,
        withVerticalPadding = _defaultProps$wrapped.withVerticalPadding,
        withoutBoxShadowOnHover = _defaultProps$wrapped.withoutBoxShadowOnHover,
        others = _objectWithoutProperties(_defaultProps$wrapped, ["className", "light", "padded", "rounded", "translateOnHover", "withBorder", "withDarkBorder", "withShadow", "withVerticalPadding", "withoutBoxShadowOnHover"]);

    var cardClassName = (0, _classnames.default)('k-Card', {
      'k-Card--light': light,
      'k-Card--padded': padded,
      'k-Card--microRounded': rounded == 'micro',
      'k-Card--tinyRounded': rounded == 'tiny',
      'k-Card--rounded': rounded == true,
      'k-Card--translateOnHover': translateOnHover,
      'k-Card--withBorder': withBorder,
      'k-Card--withDarkBorder': withDarkBorder,
      'k-Card--withShadow': withShadow,
      'k-Card--withVerticalPadding': withVerticalPadding,
      'k-Card--withoutBoxShadowOnHover': withoutBoxShadowOnHover
    }, className);
    return _react.default.createElement(WrappedComponent, _extends({
      className: cardClassName
    }, others));
  };

  return Card;
};

exports.card = card;
card.propTypes = {
  rounded: _propTypes.default.oneOf(['micro', 'tiny'])
};