"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _visuallyHidden = require("../../../../components/accessibility/visually-hidden");

var Button = function Button(_ref) {
  var a11yText = _ref.a11yText,
      icon = _ref.icon,
      backgroundColor = _ref.backgroundColor,
      backgroundColorHover = _ref.backgroundColorHover,
      color = _ref.color,
      colorHover = _ref.colorHover,
      text = _ref.text,
      href = _ref.href,
      type = _ref.type,
      _ref$hiddenText = _ref.hiddenText;
  _ref$hiddenText = _ref$hiddenText === void 0 ? {} : _ref$hiddenText;
  var min = _ref$hiddenText.min,
      max = _ref$hiddenText.max,
      as = _ref.as,
      style = _ref.style,
      className = _ref.className,
      smallPadding = _ref.smallPadding,
      props = (0, _objectWithoutProperties2.default)(_ref, ["a11yText", "icon", "backgroundColor", "backgroundColorHover", "color", "colorHover", "text", "href", "type", "hiddenText", "as", "style", "className", "smallPadding"]);
  var hiddenMin = min ? "k-u-hidden@".concat(min, "-up") : '';
  var hiddenMax = max ? "k-u-hidden@".concat(max, "-down") : '';
  var textClassName = "k-HeaderNav__Button__text ".concat(hiddenMin, " ").concat(hiddenMax).trim();
  var ButtonComponent = 'a';
  var buttonProps = {
    href: href
  };

  if (!!as) {
    if (as === 'button') {
      ButtonComponent = as;
      buttonProps = {
        type: 'button'
      };
    } else {
      ButtonComponent = as;
      buttonProps = {};
    }
  } else if (type === 'button') {
    ButtonComponent = 'button';
    buttonProps = {
      type: type
    };
  }

  return /*#__PURE__*/_react.default.createElement(ButtonComponent, (0, _extends2.default)({}, props, buttonProps, {
    className: (0, _classnames.default)('k-HeaderNav__Button', className, {
      'k-HeaderNav__Button--hasIcon': !!icon,
      'k-HeaderNav__Button--hasText': !!text,
      'k-HeaderNav__Button--smallPadding': smallPadding
    }),
    style: (0, _extends2.default)({
      '--HeaderMenu-Button-backgroundColor': backgroundColor,
      '--HeaderMenu-Button-backgroundColorHover': backgroundColorHover,
      '--HeaderMenu-Button-color': color,
      '--HeaderMenu-Button-colorHover': colorHover
    }, style)
  }), text && /*#__PURE__*/_react.default.createElement("span", {
    className: textClassName
  }), icon && _react.default.cloneElement(icon, {
    'aria-hidden': true
  }), icon && a11yText && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, a11yText), text && /*#__PURE__*/_react.default.createElement("span", {
    className: textClassName
  }, text));
};

exports.Button = Button;
Button.propTypes = {
  icon: _propTypes.default.node,
  backgroundColor: _propTypes.default.string,
  backgroundColorHover: _propTypes.default.string,
  color: _propTypes.default.string,
  colorHover: _propTypes.default.string,
  text: _propTypes.default.node,
  href: _propTypes.default.string,
  a11yText: _propTypes.default.string,
  type: _propTypes.default.oneOf(['button']),
  hiddenText: _propTypes.default.shape({
    min: _propTypes.default.string,
    max: _propTypes.default.string
  }),
  smallPadding: _propTypes.default.bool
};
Button.defaultProps = {
  icon: null,
  backgroundColor: 'transparent',
  backgroundColorHover: 'transparent',
  color: _colorsConfig.default.font1,
  colorHover: _colorsConfig.default.primary1,
  text: null,
  smallPadding: false
};