"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Item = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _classnames = _interopRequireDefault(require("classnames"));

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

var _button = require("../../../action/button");

var _deprecated2 = require("../../../../helpers/utils/deprecated");

var _excluded = ["children", "external", "liProps", "modifier", "button", "size", "isSelected", "as", "tag"];

var Item = function Item(_ref) {
  var children = _ref.children,
      external = _ref.external,
      liProps = _ref.liProps,
      modifier = _ref.modifier,
      button = _ref.button,
      size = _ref.size,
      isSelected = _ref.isSelected,
      as = _ref.as,
      tag = _ref.tag,
      other = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  (0, _deprecated2.checkDeprecatedSizes)(size);
  var Component = as || tag;
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, liProps, {
    className: (0, _classnames.default)('k-HeaderMenu__item', liProps.className, "k-HeaderMenu__item--" + size, {
      'k-HeaderMenu__item--external': external,
      'k-HeaderMenu__item--isSelected': isSelected,
      'k-HeaderMenu__item--hasButton': button,
      'k-HeaderMenu__item--light': modifier === 'light'
    })
  }), button ? /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    modifier: modifier,
    fit: "fluid"
  }, other, {
    className: (0, _classnames.default)('k-HeaderMenu__item__button', other.className),
    as: as
  }), children) : /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, other, {
    className: (0, _classnames.default)('k-HeaderMenu__item__link', other.className),
    "aria-current": isSelected ? 'page' : null
  }), children, external && /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    className: "k-HeaderMenu__item__arrow headerMenuArrowIcon",
    direction: "right"
  })));
};

exports.Item = Item;
Item.propTypes = {
  external: _propTypes.default.bool,
  button: _propTypes.default.bool,
  href: _propTypes.default.string,
  isSelected: _propTypes.default.bool,
  liProps: _propTypes.default.object,
  modifier: _propTypes.default.oneOf([null, undefined, 'light', 'default'].concat(_button.buttonModifiers)),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  as: (0, _deprecated.default)(_propTypes.default.string, 'Please use `tag` instead.'),
  tag: _propTypes.default.string
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