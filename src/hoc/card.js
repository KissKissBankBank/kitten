"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.card = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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
    var _defaultProps$wrapped = (0, _extends2.default)({}, defaultProps, wrappedProps, props),
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
        others = (0, _objectWithoutProperties2.default)(_defaultProps$wrapped, ["className", "light", "padded", "rounded", "translateOnHover", "withBorder", "withDarkBorder", "withShadow", "withVerticalPadding", "withoutBoxShadowOnHover"]);

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
    return /*#__PURE__*/_react.default.createElement(WrappedComponent, (0, _extends2.default)({
      className: cardClassName
    }, others));
  };

  return Card;
};

exports.card = card;
card.propTypes = {
  rounded: _propTypes.default.oneOf(['micro', 'tiny'])
};