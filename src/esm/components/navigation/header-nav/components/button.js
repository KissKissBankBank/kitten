import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import COLORS from '../../../../constants/colors-config';
import { VisuallyHidden } from '../../../accessibility/visually-hidden';
export const Button = _ref => {
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

  return /*#__PURE__*/React.createElement(ButtonComponent, _extends({}, props, buttonProps, {
    className: classNames('k-HeaderNav__Button', className, {
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
  }),
  smallPadding: PropTypes.bool
};
Button.defaultProps = {
  icon: null,
  backgroundColor: 'transparent',
  backgroundColorHover: 'transparent',
  color: COLORS.font1,
  colorHover: COLORS.primary1,
  text: null,
  smallPadding: false
};