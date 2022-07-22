"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Nav = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

const Item = _ref => {
  let {
    children,
    href,
    isSelected,
    smallPadding,
    className,
    ...props
  } = _ref;
  const itemClassNames = (0, _classnames.default)('k-HeaderNav-nav__item', {
    'is-selected': isSelected,
    smallPadding: smallPadding
  }, className);
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "k-HeaderNav-nav__element",
    role: "menuitem"
  }, /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({}, props, {
    href: href,
    className: itemClassNames,
    "aria-current": isSelected ? 'page' : null
  }), children));
};

Item.proptypes = {
  href: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired,
  isSelected: _propTypes.default.bool,
  smallPadding: _propTypes.default.bool
};

const Nav = _ref2 => {
  let {
    children,
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, props, {
    role: "menubar",
    className: (0, _classnames.default)('k-HeaderNav-nav', className)
  }), children);
};

exports.Nav = Nav;
Nav.Item = Item;