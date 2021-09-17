"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Button = void 0;

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.object.assign.js");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _visuallyHidden = require("../../../../components/accessibility/visually-hidden");

var _excluded = ["a11yText", "icon", "backgroundColor", "backgroundColorHover", "color", "colorHover", "text", "href", "type", "hiddenText", "as", "style", "className"];

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
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var hiddenMin = min ? "k-u-hidden@" + min + "-up" : '';
  var hiddenMax = max ? "k-u-hidden@" + max + "-down" : '';
  var textClassName = ("k-HeaderNav__Button__text " + hiddenMin + " " + hiddenMax).trim();
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
      'k-HeaderNav__Button--hasText': !!text
    }),
    style: Object.assign({
      '--HeaderMenu-Button-backgroundColor': backgroundColor,
      '--HeaderMenu-Button-backgroundColorHover': backgroundColorHover,
      '--HeaderMenu-Button-color': color,
      '--HeaderMenu-Button-colorHover': colorHover
    }, style)
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
  })
};
Button.defaultProps = {
  icon: null,
  backgroundColor: _colorsConfig.default.line1,
  backgroundColorHover: _colorsConfig.default.line2,
  color: _colorsConfig.default.font1,
  colorHover: null,
  text: null
};