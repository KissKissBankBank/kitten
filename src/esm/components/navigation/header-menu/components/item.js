import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import classNames from 'classnames';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
import { Button, buttonModifiers } from '../../../action/button';
export const Item = _ref => {
  let {
    children,
    external,
    liProps,
    modifier,
    button,
    size,
    isSelected,
    as,
    tag,
    ...other
  } = _ref;
  const Component = as || tag;
  return /*#__PURE__*/React.createElement("li", _extends({}, liProps, {
    className: classNames('k-HeaderMenu__item', liProps.className, "k-HeaderMenu__item--" + size, {
      'k-HeaderMenu__item--external': external,
      'k-HeaderMenu__item--isSelected': isSelected,
      'k-HeaderMenu__item--hasButton': button,
      'k-HeaderMenu__item--light': modifier === 'light'
    })
  }), button ? /*#__PURE__*/React.createElement(Button, _extends({
    modifier: modifier,
    fit: "fluid"
  }, other, {
    className: classNames('k-HeaderMenu__item__button', other.className),
    as: as
  }), children) : /*#__PURE__*/React.createElement(Component, _extends({}, other, {
    className: classNames('k-HeaderMenu__item__link', other.className),
    "aria-current": isSelected ? 'page' : null
  }), children, external && /*#__PURE__*/React.createElement(ArrowIcon, {
    className: "k-HeaderMenu__item__arrow headerMenuArrowIcon",
    direction: "right"
  })));
};
Item.propTypes = {
  external: PropTypes.bool,
  button: PropTypes.bool,
  href: PropTypes.string,
  isSelected: PropTypes.bool,
  liProps: PropTypes.object,
  modifier: PropTypes.oneOf([null, undefined, 'light', 'default', ...buttonModifiers]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  as: deprecated(PropTypes.string, 'Please use `tag` instead.'),
  tag: PropTypes.string
};
Item.defaultProps = {
  external: false,
  button: false,
  modifier: null,
  href: null,
  isSelected: false,
  liProps: {},
  size: 'medium',
  tag: 'a'
};