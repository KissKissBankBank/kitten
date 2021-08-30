import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Item = function Item(_ref) {
  var children = _ref.children,
      href = _ref.href,
      isSelected = _ref.isSelected,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "href", "isSelected", "className"]);

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
      props = _objectWithoutProperties(_ref2, ["children", "className"]);

  return /*#__PURE__*/React.createElement("ul", _extends({}, props, {
    role: "menubar",
    className: classNames('k-HeaderNav-nav', className)
  }), children);
};
Nav.Item = Item;