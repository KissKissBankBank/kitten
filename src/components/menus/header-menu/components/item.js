"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _arrowIcon = require("../../../icons/arrow-icon");

var _button = require("../../../../components/buttons/button/button");

var Item = function Item(_ref) {
  var children = _ref.children,
      external = _ref.external,
      liProps = _ref.liProps,
      modifier = _ref.modifier,
      button = _ref.button,
      size = _ref.size,
      isSelected = _ref.isSelected,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "external", "liProps", "modifier", "button", "size", "isSelected"]);
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
    role: "menuitem"
  }, liProps, {
    className: (0, _classnames.default)('k-HeaderMenu__item', liProps.className, "k-HeaderMenu__item--".concat(size), {
      'k-HeaderMenu__item--external': external,
      'k-HeaderMenu__item--isSelected': isSelected,
      'k-HeaderMenu__item--hasButton': button,
      'k-HeaderMenu__item--light': modifier === 'light'
    })
  }), button ? /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, other, {
    className: (0, _classnames.default)('k-HeaderMenu__item__button', other.className),
    as: "a",
    modifier: modifier,
    fluid: true
  }), children) : /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({}, other, {
    className: (0, _classnames.default)('k-HeaderMenu__item__link', other.className),
    "aria-current": isSelected ? 'page' : null
  }), children, external && /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    className: "k-HeaderMenu__item__arrow headerMenuArrowIcon",
    version: "solid",
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
  modifier: _propTypes.default.oneOf([null, undefined, 'light', 'default', 'hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen', 'copper', 'checked']),
  size: _propTypes.default.oneOf(['normal', 'tiny', 'big'])
};
Item.defaultProps = {
  external: false,
  button: false,
  modifier: null,
  href: null,
  isSelected: false,
  liProps: {},
  size: 'normal'
};