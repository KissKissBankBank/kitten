"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _visuallyHidden = require("../../../accessibility/visually-hidden");

const Button = _ref => {
  let {
    a11yText,
    icon,
    backgroundColor,
    backgroundColorHover,
    color,
    colorHover,
    text,
    href,
    type,
    hiddenText: {
      min,
      max
    } = {},
    as,
    style,
    className,
    smallPadding,
    ...props
  } = _ref;
  const hiddenMin = min ? "k-u-hidden@" + min + "-up" : '';
  const hiddenMax = max ? "k-u-hidden@" + max + "-down" : '';
  const textClassName = ("k-HeaderNav__Button__text " + hiddenMin + " " + hiddenMax).trim();
  let ButtonComponent = 'a';
  let buttonProps = {
    href
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
      type
    };
  }

  return /*#__PURE__*/_react.default.createElement(ButtonComponent, (0, _extends2.default)({}, props, buttonProps, {
    className: (0, _classnames.default)('k-HeaderNav__Button', className, {
      'k-HeaderNav__Button--hasIcon': !!icon,
      'k-HeaderNav__Button--hasText': !!text,
      'k-HeaderNav__Button--smallPadding': smallPadding
    }),
    style: {
      '--HeaderMenu-Button-backgroundColor': backgroundColor,
      '--HeaderMenu-Button-backgroundColorHover': backgroundColorHover,
      '--HeaderMenu-Button-color': color,
      '--HeaderMenu-Button-colorHover': colorHover,
      ...style
    }
  }), text && /*#__PURE__*/_react.default.createElement("span", {
    className: textClassName
  }), icon && /*#__PURE__*/_react.default.cloneElement(icon, {
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