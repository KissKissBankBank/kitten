import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { StyledLinkBox } from './styles';
import classNames from 'classnames';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
import COLORS from '../../../../constants/colors-config';
export const LinkBox = _ref => {
  let {
    className,
    href,
    isExternal,
    variant,
    backgroundColor,
    textColor,
    style,
    isSmall,
    ...props
  } = _ref;
  const target = isExternal ? {
    target: '_blank',
    rel: 'noopener'
  } : {};
  return /*#__PURE__*/React.createElement(StyledLinkBox, _extends({}, props, target, {
    href: href,
    className: className
  }), /*#__PURE__*/React.createElement("span", {
    className: classNames('k-LinkBox__link', className, "k-LinkBox__link--" + variant, {
      'k-LinkBox__link--size-small': isSmall
    }),
    style: { ...style,
      '--LinkBox-background-color': backgroundColor,
      '--LinkBox-text-color': textColor
    }
  }, props.children, /*#__PURE__*/React.createElement("span", {
    className: "k-LinkBox__arrow"
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    height: "10",
    width: "10"
  }))));
};

LinkBox.Icon = _ref2 => {
  let {
    children,
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-LinkBox__icon', className)
  }), children);
};

LinkBox.Text = _ref3 => {
  let {
    children,
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-LinkBox__textContainer', className)
  }), children);
};

LinkBox.propTypes = {
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  linkProps: PropTypes.object,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  isSmall: PropTypes.bool
};
LinkBox.defaultProps = {
  href: '#',
  isExternal: false,
  variant: 'orion',
  backgroundColor: COLORS.background1,
  textColor: null,
  isSmall: false
};