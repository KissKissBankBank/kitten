import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "href", "isSelected", "className"],
    _excluded2 = ["children", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Item = function Item(_ref) {
  var children = _ref.children,
      href = _ref.href,
      isSelected = _ref.isSelected,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var itemClassNames = classNames('k-HeaderNav-nav__item', {
    'is-selected': isSelected
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
  isSelected: PropTypes.bool
};
export var Nav = function Nav(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("ul", _extends({}, props, {
    role: "menubar",
    className: classNames('k-HeaderNav-nav', className)
  }), children);
};
Nav.Item = Item;