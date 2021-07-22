"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var Item = function Item(_ref) {
  var children = _ref.children,
      href = _ref.href,
      isSelected = _ref.isSelected,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "href", "isSelected", "className"]);
  var itemClassNames = (0, _classnames.default)('k-HeaderNav-nav__item', {
    'is-selected': isSelected
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
  isSelected: _propTypes.default.bool
};

var Nav = function Nav(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children", "className"]);
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, props, {
    role: "menubar",
    className: (0, _classnames.default)('k-HeaderNav-nav', className)
  }), children);
};

exports.Nav = Nav;
Nav.Item = Item;