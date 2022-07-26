import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Item = _ref => {
  let {
    children,
    href,
    isSelected,
    smallPadding,
    className,
    ...props
  } = _ref;
  const itemClassNames = classNames('k-HeaderNav-nav__item', {
    'is-selected': isSelected,
    smallPadding: smallPadding
  }, className);
  return /*#__PURE__*/React.createElement("li", {
    className: "k-HeaderNav-nav__element",
    role: "menuitem"
  }, /*#__PURE__*/React.createElement("a", _extends({}, props, {
    href: href,
    className: itemClassNames,
    "aria-current": isSelected ? 'page' : null
  }), children));
};

Item.proptypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool,
  smallPadding: PropTypes.bool
};
export const Nav = _ref2 => {
  let {
    children,
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement("ul", _extends({}, props, {
    role: "menubar",
    className: classNames('k-HeaderNav-nav', className)
  }), children);
};
Nav.Item = Item;