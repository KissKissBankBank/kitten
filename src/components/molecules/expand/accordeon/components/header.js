"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var _arrowIcon = require("../../../../../components/graphics/icons/arrow-icon");

var _classnames = _interopRequireDefault(require("classnames"));

var Header = function Header(_ref) {
  var id = _ref.id,
      children = _ref.children,
      index = _ref.index,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["id", "children", "index", "className"]);

  var _useContext = (0, _react.useContext)(_context.Context),
      updateSelectedItem = _useContext.updateSelectedItem,
      selectedItem = _useContext.selectedItem,
      componentId = _useContext.componentId,
      closeOnClick = _useContext.closeOnClick;

  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Accordeon__header', className),
    onClick: function onClick() {
      return updateSelectedItem(index);
    },
    role: "button",
    "aria-expanded": selectedItem === index,
    "aria-disabled": closeOnClick ? null : selectedItem === index,
    id: "".concat(componentId, "-").concat(id, "_header"),
    "aria-controls": "".concat(componentId, "-").concat(id, "_content")
  }, props), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Accordeon__header__content"
  }, children), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Accordeon__header__arrow"
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: selectedItem === index ? 'top' : 'bottom',
    "aria-hidden": true
  })));
};

exports.Header = Header;