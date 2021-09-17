import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["a11yText", "icon", "backgroundColor", "backgroundColorHover", "color", "colorHover", "text", "href", "type", "hiddenText", "as", "style", "className"];
import "core-js/modules/es.string.trim.js";
import "core-js/modules/es.object.assign.js";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import COLORS from '../../../../constants/colors-config';
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden';
export var Button = function Button(_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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

  return /*#__PURE__*/React.createElement(ButtonComponent, _extends({}, props, buttonProps, {
    className: classNames('k-HeaderNav__Button', className, {
      'k-HeaderNav__Button--hasIcon': !!icon,
      'k-HeaderNav__Button--hasText': !!text
    }),
    style: Object.assign({
      '--HeaderMenu-Button-backgroundColor': backgroundColor,
      '--HeaderMenu-Button-backgroundColorHover': backgroundColorHover,
      '--HeaderMenu-Button-color': color,
      '--HeaderMenu-Button-colorHover': colorHover
    }, style)
  }), text && /*#__PURE__*/React.createElement("span", {
    className: textClassName
  }), icon && /*#__PURE__*/React.cloneElement(icon, {
    'aria-hidden': true
  }), icon && a11yText && /*#__PURE__*/React.createElement(VisuallyHidden, null, a11yText), text && /*#__PURE__*/React.createElement("span", {
    className: textClassName
  }, text));
};
Button.propTypes = {
  icon: PropTypes.node,
  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  text: PropTypes.node,
  href: PropTypes.string,
  a11yText: PropTypes.string,
  type: PropTypes.oneOf(['button']),
  hiddenText: PropTypes.shape({
    min: PropTypes.string,
    max: PropTypes.string
  })
};
Button.defaultProps = {
  icon: null,
  backgroundColor: COLORS.line1,
  backgroundColorHover: COLORS.line2,
  color: COLORS.font1,
  colorHover: null,
  text: null
};